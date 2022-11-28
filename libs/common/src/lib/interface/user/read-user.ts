import { IUser } from './user';

import { IReadPermission } from '../permission';

import { IReadPricelevel } from '../pricelevel';

export type IReadUser = IUser<IReadPermission, IReadPricelevel>;
