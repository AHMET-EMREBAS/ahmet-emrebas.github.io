import { writeFileSync } from 'fs';
import { kebabCase } from 'lodash';
import { join } from 'path';

type InputType =
  | 'select-one'
  | 'find-one'
  | 'select-many'
  | 'find-many'
  | 'select-target'
  | 'checkbox-group'
  | 'switch-group'
  | 'radio';

const RelationTypes: [string, InputType[]][] = [
  [
    'ManyToMany',
    ['select-many', 'find-many', 'checkbox-group', 'switch-group'],
  ],
  ['OneToMany', ['select-many', 'find-many', 'checkbox-group', 'switch-group']],
  ['ManyToOne', ['select-one', 'find-one', 'select-target', 'radio']],
  ['OneToOne', ['select-one', 'find-one', 'select-target', 'radio']],
];

const indexContent: any = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Relation Type',
  $id: 'RelationType',
  oneOf: [],
};

function toFileName(text: string) {
  return kebabCase(text) + '.schema.json';
}

for (const [r, inputTypes] of RelationTypes) {
  const content = {
    $schema: 'http://json-schema.org/draft-07/schema',
    title: `${r} Property`,
    $id: `${r}Property`,
    properties: {
      description: {
        type: 'string',
      },
      type: { const: `${r}` },
      target: { type: 'string', $ref: '../name/resource.schema.json' },
      inputType: {
        enum: inputTypes,
      },
      viewColumns: {
        patternProperties: {
          '.*': {
            properties: {
              as: {
                type: 'string',
              },
            },
          },
        },
        propertyNames: {
          $ref: '../name/property.schema.json',
        },
        minProperties: 1,
      },
      eager: { type: 'boolean', default: true },
      nullable: { type: 'boolean', default: true },
      onDelete: {
        enum: ['RESTRICT', 'CASCADE', 'SET NULL', 'DEFAULT', 'NO ACTION'],
        default: 'CASCADE',
      },
      onUpdate: {
        enum: ['RESTRICT', 'CASCADE', 'SET NULL', 'DEFAULT', 'NO ACTION'],
        default: 'CASCADE',
      },
      cascase: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['insert', 'update', 'remove', 'soft-remove', 'recover'],
        },
      },
    },
    required: ['type', 'target', 'inputType'],
    additionalProperties: false,
  };
  indexContent.oneOf.push({
    $ref: toFileName(r),
  });

  writeFileSync(
    join(__dirname, 'relation', toFileName(r)),
    JSON.stringify(content)
  );
}

writeFileSync(
  join(__dirname, 'relation', 'index.schema.json'),
  JSON.stringify(indexContent)
);
