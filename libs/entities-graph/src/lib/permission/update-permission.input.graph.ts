/** Generated by @techbir/gen:entity */

import { CreatePermissionInput } from './create-permission.input.graph';
import { PartialType } from '@nestjs/graphql';
import { Input } from '@techbir/core';

@Input()
export class UpdatePermissionInput extends PartialType(CreatePermissionInput) {}
