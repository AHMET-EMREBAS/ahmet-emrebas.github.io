import { KeyValueStore } from './key-value-store';

export class ConfigManager {
  map = new Map<string, KeyValueStore>();

  set(key: string, config: KeyValueStore) {
    this.map.set(key, config);
  }

  get(key: string) {
    return this.map.get(key);
  }
}
