import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/core';
import { CreateProductDto } from './create-product.dto';

@Dto()
export class UpdateProductDto extends PartialType(CreateProductDto) {}
