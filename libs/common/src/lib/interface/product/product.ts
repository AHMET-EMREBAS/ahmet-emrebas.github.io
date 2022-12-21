import { IBaseEntity } from '../../common';
export interface IProduct<Category> extends IBaseEntity {
  name: string;

  description: string;

  upc: string;

  price: number;

  cost: number;

  quantity: number;

  category: Category;
}
