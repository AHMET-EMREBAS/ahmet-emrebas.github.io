import { Property } from '../property';

export class ParamIdDto {
  @Property({ type: 'integer', isStringInteger: true, minimum: 1 })
  id: number;
}

export class BodyIdDto {
  @Property({ type: 'integer', minimum: 1 })
  id: number;
}
