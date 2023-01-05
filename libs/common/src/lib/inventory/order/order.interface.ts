import { BaseInterface } from '../../common';

export interface OrderInterface<Store, Product, Customer, Employee>
  extends BaseInterface {
  quantity: number;

  store: Store;

  product: Product;

  customer: Customer;

  employee: Employee;
}
