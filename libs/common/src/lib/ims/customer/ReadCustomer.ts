import { ICustomer } from './ICustomer';

import { ReadPermission } from '../permission/ReadPermission';

import { ReadPricelevel } from '../pricelevel/ReadPricelevel';

export type ReadCustomer = ICustomer<ReadPermission, ReadPricelevel>;
