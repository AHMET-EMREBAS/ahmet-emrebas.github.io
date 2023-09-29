import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { Dto } from '@techbir/core';

@Dto()
export class UpdateProductDto extends PartialType(CreateProductDto) {}
