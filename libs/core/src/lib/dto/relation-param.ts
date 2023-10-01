import { Property } from '../property';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RelationUnsetParam {
  @Property({ name: 'id', type: 'number' })
  id!: number;

  @Property({
    name: 'relationName',
    type: 'string',
    minLength: 1,
    maxLength: 50,
  })
  relationName!: string;
}

@InputType()
export class RelationParam extends RelationUnsetParam {
  @Property({ name: 'relationId', type: 'number' })
  relationId!: number;
}
