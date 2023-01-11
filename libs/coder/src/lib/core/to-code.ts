/**
 * Convert class properties and values into code
 */
export abstract class ToCode {
  protected readonly __groups: Set<string | number>;
  constructor(groups?: string[]) {
    this.__groups = new Set(groups || []);
  }
  toCode(group?: string): string {
    throw new Error('Not Implemented');
  }
  toCodeByGroup(group?: string): string {
    if (group) {
      if (!this.__groups.has(group)) {
        return '';
      }
    }
    return this.toCode(group);
  }
}
