import { BaseInterface } from '../../common';

export interface PorderInterface<Store, Product, Customer, Employee>
  extends BaseInterface {
  quantity: number;

  store: Store;

  product: Product;

  customer: Customer;

  employee: Employee;
}
