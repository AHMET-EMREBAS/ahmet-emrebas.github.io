import { ApiProperty } from '@nestjs/swagger';
import { RelationOptions } from '@techbir/common';
import { ClassConstructor, propertyDecorators } from '@techbir/utils';
import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

export function Relation({ type, target, join, ...rest }: RelationOptions) {
  const ds = [
    ApiProperty({
      type: type.endsWith('Many') ? 'array' : 'object',
      default: type.endsWith('Many') ? [{ id: '1' }] : { id: 1 },
      nullable: true,
      required: false,
    }),
  ];
  const __target = () => target as ClassConstructor<any>;
  const __id = (t: any) => t.id;

  if (type === 'ManyToMany') {
    ds.push(ManyToMany(__target, __id, rest));
  } else if (type === 'ManyToOne') {
    ds.push(ManyToOne(__target, __id, rest));
  } else if (type === 'OneToMany') {
    ds.push(OneToMany(__target, __id, rest));
  } else if (type === 'OneToOne') {
    ds.push(OneToOne(__target, __id, rest));
  }

  if (type === 'ManyToMany' || type === 'OneToMany')
    if (join) ds.push(JoinTable());

  if (type === 'ManyToOne' || type === 'OneToOne')
    if (join) ds.push(JoinColumn());

  return propertyDecorators(...ds);
}
