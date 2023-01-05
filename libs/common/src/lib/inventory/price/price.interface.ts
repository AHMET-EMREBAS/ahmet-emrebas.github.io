export interface PriceInterface<Product, PriceLevel> {
  price: number;

  cost: number;

  product: Product;

  priceLevel: PriceLevel;
}
