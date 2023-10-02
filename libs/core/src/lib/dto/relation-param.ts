import { Input } from '../entities';
import { Field } from '../property';

@Input()
export class RelationUnsetParam {
  @Field({ name: 'id', type: 'number' })
  id!: number;

  @Field({
    name: 'relationName',
    type: 'string',
    minLength: 1,
    maxLength: 50,
  })
  relationName!: string;
}

@Input()
export class RelationParam extends RelationUnsetParam {
  @Field({ name: 'relationId', type: 'number' })
  relationId!: number;
}
