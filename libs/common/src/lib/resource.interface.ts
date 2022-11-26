export interface IResource {
  type: 'basic-resource' | 'single-resource';
  required?: string[];
  unique?: string[];
  group?: Record<string, string[]>;
  mainProperty: string;
  properties?: any;
}
