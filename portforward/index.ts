import { IContainer, IPod, IPort } from './interfaces';

const alfy = require('alfy');
import * as shelljs from 'shelljs';
import '../common/shared';
import { IItem } from '../common/alfred-interfaces';

const filter: string = alfy.input.split(' ')[0];
let mountPort: string = alfy.input.split(' ')[1] || '1337';

const items: IItem[] = JSON.parse(shelljs.exec('kubectl get pods -o json', {
  silent: true,
}).stdout as string)
  .items.reduce((items: IItem[], pod: IPod) => {
    let newItems: IItem[] = [];

    pod.spec.containers.forEach((container: IContainer) => {
      if (container.ports) {
        container.ports.forEach((port: IPort) => {
          newItems.push({
            arg: `${pod.metadata.name} ${mountPort}:${port.containerPort}`,
            autocomplete: `${container.name}:${
              port.containerPort
            } ${mountPort}`,
            subtitle: `${pod.status.phase} ${container.image} on port ${
              port.containerPort
            } on ${pod.metadata.name}`,
            title: `${container.name}:${port.containerPort}`,
            valid: !!mountPort,
          });
        });
      }
    });

    return items.concat(newItems);
  }, [])
  .filter(item => item.title.match(filter) || item.subtitle.match(filter));

alfy.output(items);
