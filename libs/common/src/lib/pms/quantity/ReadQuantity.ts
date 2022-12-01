import { IQuantity } from './IQuantity';

import { ReadProduct } from '../product';

import { ReadStore } from '../store';

export type ReadQuantity = IQuantity<ReadProduct, ReadStore>;
