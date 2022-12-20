export interface IPrice<Product, Pricelevel> {
  price: number;

  cost: number;

  product: Product;

  pricelevel: Pricelevel;
}
