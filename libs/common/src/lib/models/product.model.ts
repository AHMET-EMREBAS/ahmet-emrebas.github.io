import { Schema } from '../schema';

export const ProductModel: Schema = {
  properties: {
    name: {
      columnOptions: {},
      inputOptions: {
        attributes: {
          type: 'text',
        },
      },
    },
    description: {
      columnOptions: {},
      inputOptions: {
        attributes: {
          type: 'text',
        },
      },
    },
  },
  relations: {},
};
