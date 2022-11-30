import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './CreateProductDto';
export class  UpdateProductDto extends  PartialType(CreateProductDto){};
