import { ITask } from './ITask';

import { ReadUser } from '../user';

import { ReadTag } from '../tag';

export type ReadTask = ITask<ReadUser, ReadTag>;
