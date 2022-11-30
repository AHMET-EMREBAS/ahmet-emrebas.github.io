import { IPrice } from './price';

import { IReadPricelevel } from '../pricelevel';

import { IReadProduct } from '../product';

export type IReadPrice = IPrice<IReadPricelevel, IReadProduct>;
