export type PropertyOptions = Partial<{
  type: string;
  inputType: string;
  required: boolean;
  unique: boolean;
  minLength: number;
  maxLength: number;
  minimum: number;
  maximum: number;
  email: boolean;
  password: boolean;
  uuid: boolean;
  barcode: boolean;
  id: string;
  autocomplete: string;
  label: string;
  enum: string[];
  icon: string;
}>;
