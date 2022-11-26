export interface ISingleResource {
  type: 'single-resource';
}

export interface IBasicResource {
  type: 'basic-resource';
  required?: string[];
  unique?: string[];
  group?: Record<string, string[]>;
  mainProperty: string;
}

export type IResource = ISingleResource | IBasicResource;
