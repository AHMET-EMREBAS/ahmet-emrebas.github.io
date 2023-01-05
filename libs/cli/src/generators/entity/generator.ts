import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';

import {
  parseColumnType,
  parsePropertyDecorator,
  parsePropertyType,
  SchemaInterface,
} from '../shared';
import { EntityGeneratorSchema } from './schema';

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const PROJECT_NAME = options.project;
  const MODEL_NAME = options.model;

  const MODEL_SCHEMA_PATH = join(
    'resources',
    PROJECT_NAME,
    MODEL_NAME + '.yaml'
  );

  const FILES = join(__dirname, 'files');
  const TARGET = join('libs', 'models', 'src', 'lib', PROJECT_NAME);

  const MODEL_SCHEMA = (await load(
    readFileSync(MODEL_SCHEMA_PATH).toString()
  )) as SchemaInterface;

  const columns = Object.entries(MODEL_SCHEMA.properties || {}).map(
    ([key, value]) => {
      const propertyOptions = {
        type: parseColumnType(value.type),
      };

      if (!MODEL_SCHEMA.required?.includes(key)) {
        propertyOptions['nullable'] = true;
      }

      if (MODEL_SCHEMA.unique?.includes(key)) {
        propertyOptions['unique'] = true;
      }

      return {
        property: `${key}:${parsePropertyType(value.type)}`,
        decorator: `@Column( ${JSON.stringify(propertyOptions)})`,
      };
    }
  );

  const relations = Object.entries(MODEL_SCHEMA.relations || {}).map(
    ([key, value]) => {
      const relationOptions = {};

      if (value.eager) relationOptions['eager'] = true;
      if (value.onDelete) relationOptions['onDelete'] = value.onDelete;
      if (value.onUpdate) relationOptions['onUpdate'] = value.onUpdate;

      return {
        property: `${key}:${value.target}${
          value.type.endsWith('Many') ? '[]' : ''
        }`,
        decorator: `
        @${value.type}(()=>${value.target}, e=>e.id, ${JSON.stringify(
          relationOptions
        )})\n
        ${value.type.endsWith('Many') ? '@JoinTable()' : '@JoinColumn()'}

        `,
      };
    }
  );

  const properties = [
    ...Object.entries(MODEL_SCHEMA.properties || {}).map(([key, value]) => {
      const propertyOptions = {};

      if (!MODEL_SCHEMA.required?.includes(key))
        propertyOptions['optional'] = true;

      if (MODEL_SCHEMA.unique?.includes(key)) propertyOptions['unique'] = true;

      return {
        property: `${key}: ${parsePropertyType(value.type)}`,
        decorator: `@${parsePropertyDecorator(value.type)}(${JSON.stringify(
          propertyOptions
        )})`,
      };
    }),
    ...Object.entries(MODEL_SCHEMA.relations || {}).map(([key, value]) => {
      console.log(`${key}: ${value.type}`);
      return {
        property: `${key}: ${
          value.type.endsWith('Many') ? 'IdDto[]' : 'IdDto'
        }`,
        decorator: value.type.endsWith('Many')
          ? '@IdProperty({each:true})'
          : '@IdProperty()',
      };
    }),
  ];
  const propertyDecorators = [
    ...new Set(
      Object.values(MODEL_SCHEMA.properties || {}).map((value) => {
        return `${parsePropertyDecorator(value.type)}`;
      })
    ),
  ].join(', ');

  const targets = [
    ...new Set(
      Object.values(MODEL_SCHEMA.relations || {}).map((e) => e.target)
    ),
  ]
    .map((e) => {
      return `import { ${e}} from '../${names(e).fileName}';`;
    })
    .join('\n');

  generateFiles(tree, FILES, TARGET, {
    ...names(MODEL_NAME),
    columns,
    relations,
    template: '',
    properties,
    propertyDecorators,
    targets,
  });

  await formatFiles(tree);
}
