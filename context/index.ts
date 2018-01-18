import {IItem} from '../common/alfred-interfaces';

const alfy = require('alfy');
import * as shelljs from 'shelljs';
import {
  IContext,
} from './interfaces';
import '../common/shared';

const filter: string = alfy.input.split(' ')[0];

const items: IItem[] = (
  shelljs
    .exec('kubectl config get-contexts --no-headers=true', {silent: true})
    .stdout as string
)
  .split('\n')
  .filter(line => line && line.length > 0)
  .reduce(
    (items: IContext[], listItem: string) => {

      const matches: RegExpMatchArray = listItem.match(/[\w]+/);

      if (matches && matches.length > 0) {
        const contextName: string = listItem.match(/[\w]+/).pop();

        items
          .push(
            {
              current: listItem.indexOf('*') === 0,
              name: contextName,
            },
          );
      }
      return items;

    },
    [],
  )
  .filter(item => item.name.match(filter))
  .map((context: IContext): IItem => ({
    arg: context.name,
    subtitle: context.current ? `Current` : ``,
    title: context.name,
    valid: true,
  }));

alfy
  .output(
    items,
  );
