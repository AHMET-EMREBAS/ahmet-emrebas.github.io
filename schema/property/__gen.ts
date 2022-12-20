import { writeFileSync } from 'fs';
import { kebabCase, snakeCase } from 'lodash';

function toFileName(text: string) {
  return kebabCase(text) + '.schema.json';
}
type Types =
  | 'String'
  | 'Number'
  | 'Integer'
  | 'Date'
  | 'Boolean'
  | 'ManyToOne'
  | 'ManyToMany'
  | 'OneToOne'
  | 'OneToMany';

type Validators =
  | 'minLength'
  | 'maxLength'
  | 'minimum'
  | 'maximum'
  | 'future'
  | 'past'
  | 'email'
  | 'password'
  | 'uuid';

const properties: [Types, Validators[]][] = [
  ['String', ['minLength', 'maxLength', 'email', 'password', 'uuid']],
  ['Number', ['minimum', 'maximum']],
  ['Integer', ['minimum', 'maximum']],
  ['Boolean', []],
  ['Date', ['future', 'past']],
  ['ManyToOne', []],
  ['ManyToMany', []],
  ['OneToOne', []],
  ['OneToMany', []],
];

const indexContent = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Property Type',
  $id: 'PropertyType',
  oneOf: [
    {
      $ref: './integer.schema.json',
    },
  ],
};

for (const [propertyType, validators] of properties) {
  const content: any = {
    $schema: 'http://json-schema.org/draft-07/schema',
    title: propertyType + ' Property',
    $id: propertyType + 'Property',
    properties: {
      type: {
        const: propertyType,
      },
    },
    required: ['type'],
    additionalItems: false,
  };
  if (validators && validators.length > 0) {
    for (const validator of validators) {
      content.properties[validator] = !!validator.match(/min|max/)
        ? { type: 'number', default: 0 }
        : { type: 'boolean', default: false };
    }
  }

  indexContent.oneOf.push({
    $ref: `./${toFileName(propertyType)}`,
  });

  writeFileSync(toFileName(propertyType), JSON.stringify(content));
}

writeFileSync(toFileName('index'), JSON.stringify(indexContent));
