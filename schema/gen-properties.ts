import { writeFileSync } from 'fs';
import { kebabCase } from 'lodash';
import { join } from 'path';

function toFileName(text: string) {
  return kebabCase(text) + '.schema.json';
}
type Types = 'String' | 'Number' | 'Integer' | 'Date' | 'Boolean';

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
];

const indexContent: any = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Property Type',
  $id: 'PropertyType',
  oneOf: [],
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
    additionalProperties: false,
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

  writeFileSync(
    join(__dirname, 'property', toFileName(propertyType)),
    JSON.stringify(content)
  );
}

writeFileSync(
  join(__dirname, 'property', toFileName('index')),
  JSON.stringify(indexContent)
);
