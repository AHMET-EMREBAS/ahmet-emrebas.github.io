import { BaseInterface } from '../../common';

export interface ProductInterface<Category, Department> extends BaseInterface {
  name: string;

  price: number;

  cost: number;

  quantity: number;

  barcode: string;

  category: Category;

  department: Department;
}
