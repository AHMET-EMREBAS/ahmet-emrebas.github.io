/** Generated by @techbir/gen:entity */

import { CreateRoleInput } from './create-role.input.graph';
import { PartialType } from '@nestjs/graphql';
import { Input } from '@techbir/core';

@Input()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {}
