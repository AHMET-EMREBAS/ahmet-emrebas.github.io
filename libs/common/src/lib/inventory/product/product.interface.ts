export interface ProductInterface<Category, Department> {
  name: string;

  price: number;

  cost: number;

  quantity: number;

  barcode: string;

  category: Category;

  department: Department;
}
