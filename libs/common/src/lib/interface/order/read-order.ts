import { Order } from './order';

import { Product } from './product';

import { Cart } from './cart';

import { Customer } from './customer';

export type ReadOrder = Order<Product, Cart, Customer>;
