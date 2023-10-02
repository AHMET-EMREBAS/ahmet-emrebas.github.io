export class Context<T> {
  private readonly map = new Map<keyof T, T[keyof T]>();
  private readonly modulesMap = new Map<string, any[]>();
  value<K extends keyof T>(key: K, value?: T[K]): T[K] {
    if (value !== undefined) {
      this.map.set(key, value);
    }
    return this.map.get(key) as T[K];
  }

  module(profile: string, mdl: any) {
    const moduleList = this.modulesMap.get(profile);
    if (!moduleList) {
      this.modulesMap.set(profile, []);
    }
    this.modulesMap.get(profile)?.push(mdl);
  }
  modules(profile: string) {
    return this.modulesMap.get(profile) || [];
  }
}
