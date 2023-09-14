export interface KeyValueStore<T = any, K extends keyof T = keyof T> {
  set(key: K, value: T[K]): void;
  get(key: K): T[K];
}
