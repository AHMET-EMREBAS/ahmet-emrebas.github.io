import { IOrder } from './IOrder';

import { ReadProduct } from '../product';

import { ReadCart } from '../cart';

import { ReadCustomer } from '../customer';

export type ReadOrder = IOrder<ReadProduct, ReadCart, ReadCustomer>;
