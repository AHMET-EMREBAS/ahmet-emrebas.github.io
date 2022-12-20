import { writeFileSync } from 'fs';
import { kebabCase } from 'lodash';
import { join } from 'path';

function toFileName(text: string) {
  return kebabCase(text) + '.schema.json';
}
type Types = 'String' | 'Number' | 'Integer' | 'Date' | 'Boolean';

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'barcode'
  | 'uuid'
  | 'id'
  | 'textarea'
  | 'texteditor'
  | 'integer'
  | 'decimal'
  | 'currency'
  | 'date'
  | 'checkbox'
  | 'radio'
  | 'checkbox-group'
  | 'switch'
  | 'switch-group'
  | 'select-one'
  | 'select-many'
  | 'find-one'
  | 'find-many'
  | 'NA';

type Validators =
  | 'minLength'
  | 'maxLength'
  | 'minimum'
  | 'maximum'
  | 'future'
  | 'past'
  | 'email'
  | 'password'
  | 'uuid'
  | 'required'
  | 'unique'
  | 'name'
  | 'barcode'
  | 'phone';

const properties: [Types, Validators[], InputType[]][] = [
  [
    'String',
    [
      'name',
      'required',
      'unique',
      'minLength',
      'maxLength',
      'email',
      'password',
      'uuid',
      'barcode',
      'phone',
    ],
    [
      'text',
      'texteditor',
      'password',
      'email',
      'uuid',
      'barcode',
      'textarea',
      'select-one',
      'select-many',
      'NA',
    ],
  ],
  [
    'Number',
    ['required', 'unique', 'minimum', 'maximum'],
    ['decimal', 'currency'],
  ],
  [
    'Integer',
    ['required', 'unique', 'minimum', 'maximum'],
    ['integer', 'id', 'NA'],
  ],
  [
    'Boolean',
    [],
    ['checkbox', 'switch', 'checkbox-group', 'switch-group', 'NA'],
  ],
  ['Date', ['required', 'unique', 'future', 'past'], ['date', 'NA']],
];

const indexContent: any = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Property Type',
  $id: 'PropertyType',
  oneOf: [],
};

for (const [propertyType, validators, inputTypes] of properties) {
  const content: any = {
    $schema: 'http://json-schema.org/draft-07/schema',
    title: propertyType + ' Property',
    $id: propertyType + 'Property',
    properties: {
      description: {
        type: 'string',
      },
      type: {
        const: propertyType,
      },
      inputType: {
        enum: inputTypes,
      },
      enum: {
        type: 'array',
        items: {},
      },
      generated: {
        type: 'string',
        enum: ['id', 'uuid'],
      },
    },
    required: ['type', 'inputType'],
    additionalProperties: false,
  };
  if (validators && validators.length > 0) {
    for (const validator of validators) {
      content.properties[validator] = !!validator.match(/min|max/)
        ? { type: 'number', description: 'Validator', default: 0 }
        : { type: 'boolean', description: 'Validator', default: true };
    }
  }

  indexContent.oneOf.push({
    $ref: `./${toFileName(propertyType)}`,
  });

  writeFileSync(
    join(__dirname, 'property', toFileName(propertyType)),
    JSON.stringify(content)
  );
}

writeFileSync(
  join(__dirname, 'property', toFileName('index')),
  JSON.stringify(indexContent)
);
