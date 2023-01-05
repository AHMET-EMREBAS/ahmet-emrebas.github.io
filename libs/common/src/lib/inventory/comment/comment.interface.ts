import { BaseInterface } from '../../common';

export interface CommentInterface<Employee, Task> extends BaseInterface {
  comment: string;

  employee: Employee;

  task: Task;
}
