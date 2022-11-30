import { IOrder } from './order';

import { IReadProduct } from '../product';

import { IReadCart } from '../cart';

import { IReadCustomer } from '../customer';

export type IReadOrder = IOrder<IReadProduct, IReadCart, IReadCustomer>;
