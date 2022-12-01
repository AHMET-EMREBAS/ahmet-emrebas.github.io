import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './CreateProductDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateProductDto extends PartialType(CreateProductDto) {}
