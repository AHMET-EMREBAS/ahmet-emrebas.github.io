import { KeyValueStore } from './key-value-store';

export class Config<T = any, K extends keyof T = keyof T>
  implements KeyValueStore
{
  readonly map = new Map<K, T[K]>();

  constructor(
    private readonly moduleName: string,
    private readonly configManager: KeyValueStore
  ) {
    configManager.set(moduleName, this);
  }

  get(key: K) {
    return this.map.get(key);
  }

  set(key: K, value: T[K]) {
    this.map.set(key, value);
  }
}
