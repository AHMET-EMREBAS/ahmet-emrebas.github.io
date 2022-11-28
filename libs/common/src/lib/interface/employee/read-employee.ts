import { IEmployee } from './employee';

import { IReadPermission } from '../permission';

import { IReadPricelevel } from '../pricelevel';

export type IReadEmployee = IEmployee<IReadPermission, IReadPricelevel>;
