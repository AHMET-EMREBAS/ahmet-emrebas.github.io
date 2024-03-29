/** Generated by @techbir/gen:entity */

import { Field, ObjectType, Input, BaseInput } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { User } from './../user';
@ObjectType()
export class Message extends BaseInput {
  @Field({
    name: 'message',
    type: 'string',
    minLength: 0,
    maxLength: 500,
    required: true,
    inputType: 'textarea',
    autocomplete: 'off',
    icon: 'message',
    label: 'Message',
  })
  message!: string;
  @Field({
    type: 'ManyToOne',
    onDelete: 'CASCADE',
    join: true,
    eager: true,
    name: 'to',
    target: User,
  })
  to?: User;
  @Field({
    type: 'ManyToOne',
    onDelete: 'CASCADE',
    join: true,
    eager: true,
    name: 'from',
    target: User,
  })
  from?: User;
}
