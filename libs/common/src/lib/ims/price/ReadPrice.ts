import { IPrice } from './IPrice';

import { ReadPricelevel } from '../pricelevel/ReadPricelevel';

import { ReadProduct } from '../product/ReadProduct';

export type ReadPrice = IPrice<ReadPricelevel, ReadProduct>;
