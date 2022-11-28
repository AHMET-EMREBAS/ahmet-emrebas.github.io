import { Customer } from './customer';

import { Permission } from './permission';

import { Pricelevel } from './pricelevel';

export type ReadCustomer = Customer<Permission, Pricelevel>;
