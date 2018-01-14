export interface IContainer {
  name: string;
  image: string;
  ports: IPort[];
}

export interface IPort {
  containerPort: number;
  protocol: string;
}

export interface IPod {
  metadata: {
    name: string;
  };
  status: {
    phase: string;
  };
  spec: {
    containers: IContainer[];
  };
}
