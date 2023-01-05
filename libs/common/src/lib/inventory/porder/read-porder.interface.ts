import { BaseInterface } from '../../common';

export interface ReadPorderInterface extends BaseInterface {
  quantity: number;

  storeName: string;

  name: string;

  barcode: string;

  customer: string;

  eid: number;
}
