export declare type EntityConstructor<
  T extends { id: number } = { id: number }
> = {
  new (...args: any[]): T;
};
