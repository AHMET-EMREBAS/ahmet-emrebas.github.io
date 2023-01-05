import { BaseInterface } from '../../common';

export interface ReadCommentInterface extends BaseInterface {
  comment: string;

  eid: string;

  firstName: string;

  lastName: string;

  taskId: string;
}
