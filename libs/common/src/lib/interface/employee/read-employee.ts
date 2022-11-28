import { Employee } from './employee';

import { Permission } from './permission';

import { Pricelevel } from './pricelevel';

export type ReadEmployee = Employee<Permission, Pricelevel>;
