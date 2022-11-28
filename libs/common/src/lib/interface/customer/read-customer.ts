import { ICustomer } from './customer';

import { IReadPermission } from '../permission';

import { IReadPricelevel } from '../pricelevel';

export type IReadCustomer = ICustomer<IReadPermission, IReadPricelevel>;
