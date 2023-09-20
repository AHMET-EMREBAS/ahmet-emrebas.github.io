import { EventObject } from '../types';

export interface BeforeEmit {
  beforeEmit(event: EventObject): void;
}

export interface AfterEmit {
  afterEmit(event: EventObject): void;
}
