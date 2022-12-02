import { IOrder } from './IOrder';

import { ReadProduct } from '../product/ReadProduct';

import { ReadCart } from '../cart/ReadCart';

import { ReadCustomer } from '../customer/ReadCustomer';

export type ReadOrder = IOrder<ReadProduct, ReadCart, ReadCustomer>;
