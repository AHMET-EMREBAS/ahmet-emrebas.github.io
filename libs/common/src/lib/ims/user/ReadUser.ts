import { IUser } from './IUser';

import { ReadPermission } from '../permission/ReadPermission';

import { ReadPricelevel } from '../pricelevel/ReadPricelevel';

export type ReadUser = IUser<ReadPermission, ReadPricelevel>;
