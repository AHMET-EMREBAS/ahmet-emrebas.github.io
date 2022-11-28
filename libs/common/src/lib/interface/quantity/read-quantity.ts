import { IQuantity } from './quantity';

import { IReadProduct } from '../product';

import { IReadStore } from '../store';

export type IReadQuantity = IQuantity<IReadProduct, IReadStore>;
