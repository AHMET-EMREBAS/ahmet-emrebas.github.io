import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Patch,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly service: ProductService,
    private readonly viewService: ProductViewService
  ) {}
  @CanRead('product')
  @Get()
  readProduct(
    @Query() paginatorDto: PaginatorDto<Product | ProductView>,
    @Query() viewDto: ViewDto,
    @Query() whereDto: WhereDto
  ) {
    const q = {
      ...paginatorDto,
      where: whereDto.where,
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @CanRead('product')
  @Get(':id')
  readProductById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy({ id });
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('product')
  @Post()
  writeProduct(@Body() body: CreateProductDto) {
    return this.service.save(body);
  }

  @CanWrite('product')
  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() body: UpdateProductDto) {
    return this.service.update(id, body);
  }

  @CanWrite('product')
  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('product')
  @Patch()
  functionsProduct(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a function name.');
  }

  @CanWrite('product')
  @Post(':id/category/:categoryId')
  setcategoryToProduct(id: number, categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @CanWrite('product')
  @Post(':id/category')
  unsetcategoryFromProduct(id: number) {
    return this.service.unset(id, 'category');
  }

  @CanWrite('product')
  @Post(':id/department/:departmentId')
  setdepartmentToProduct(id: number, departmentId: number) {
    return this.service.set(id, departmentId, 'department');
  }

  @CanWrite('product')
  @Post(':id/department')
  unsetdepartmentFromProduct(id: number) {
    return this.service.unset(id, 'department');
  }
}
