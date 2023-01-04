export interface PropertyOptions {
  type: string;
  label: string;
  hint: string;
  prefix: string;
  suffix: string;
  enum: string[];
}

export interface RelationOptions {
  type: string;
  target: string;
  eager: boolean;
  onDelete: string;
  onUpdate: string;
  views: Record<
    string,
    {
      as: string;
      label: string;
      prefix: string;
      suffix: string;
      type: 'string' | 'number' | 'Date' | 'boolean';
    }
  >;
}

export interface SchemaInterface {
  properties: Record<string, PropertyOptions>;
  relations: Record<string, RelationOptions>;
  required: string[];
  unique: string;
  formGroup: Record<string, string[]>;
}
