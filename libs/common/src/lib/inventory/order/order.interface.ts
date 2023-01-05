export interface OrderInterface<Store, Product, Customer, Employee> {
  quantity: number;

  store: Store;

  product: Product;

  customer: Customer;

  employee: Employee;
}
