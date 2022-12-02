import { IQuantity } from './IQuantity';

import { ReadProduct } from '../product/ReadProduct';

import { ReadStore } from '../store/ReadStore';

export type ReadQuantity = IQuantity<ReadProduct, ReadStore>;
