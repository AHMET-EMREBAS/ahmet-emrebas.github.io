export interface IProduct<Category> {
  name: string;

  description: string;

  upc: string;

  price: number;

  cost: number;

  quantity: number;

  category: Category;
}
