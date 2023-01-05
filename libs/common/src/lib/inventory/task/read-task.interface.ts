import { BaseInterface } from '../../common';

export interface ReadTaskInterface extends BaseInterface {
  title: string;

  description: string;

  status: string;

  eid: string;

  firstName: string;

  lastName: string;
}
