import { ICustomer } from './ICustomer';

import { ReadPermission } from '../permission';

import { ReadPricelevel } from '../pricelevel';

export type ReadCustomer = ICustomer<ReadPermission, ReadPricelevel>;
