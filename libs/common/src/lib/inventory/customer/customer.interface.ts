export interface CustomerInterface<PriceLevel> {
  type: string;

  username: string;

  password: string;

  firstName: string;

  lastName: string;

  phone: string;

  priceLevel: PriceLevel;
}
