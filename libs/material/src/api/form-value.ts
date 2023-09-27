export class FormValue<T = Record<string, any>, K extends keyof T = keyof T> {
  private readonly value = new Map<K, T[K] | undefined>();

  set(key: K, value: T[K]) {
    this.value.set(key, value);
  }

  get(key: K): T[K] | undefined {
    return this.value.get(key);
  }

  reset() {
    this.value.clear();
  }

  formValue() {
    const result: Partial<Record<K, T[K]>> = {};

    for (const [key, value] of this.value) result[key] = value;

    return result;
  }
}
