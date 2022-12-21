export interface Property {
  type: string;
  inputType: string;
  minLength: number;
  maxLength: number;
  minimum: number;
  maximum: number;
  required: boolean;
  unique: boolean;
}

export interface Relation {
  type: string;
  target: string;
  onDelete: string;
  onUpdate: string;
  cascade: string[];
  eager: boolean;
  nullable: boolean;
  viewColumns: Record<
    string,
    {
      as: string;
    }
  >;
}

export interface ModelSchema {
  properties: Record<string, Property>;
  relations: Record<string, Relation>;
}
