import { commerce } from 'faker';

import {
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './models/category';
import { Department } from './models/department';
import { Price } from './models/price';
import { Pricelevel } from './models/pricelevel';
import { Product } from './models/product';
import { Quantity } from './models/quantity';
import { Sku } from './models/sku';
import { Store } from './models/store';
import {
  CategoryModule,
  CategoryService,
} from './rest/category';
import {
  DepartmentModule,
  DepartmentService,
} from './rest/department';
import {
  PriceModule,
  PriceService,
} from './rest/price';
import { PricelevelModule } from './rest/pricelevel';
import {
  ProductModule,
  ProductService,
} from './rest/product';
import {
  QuantityModule,
  QuantityService,
} from './rest/quantity';
import {
  SkuModule,
  SkuService,
} from './rest/sku';
import {
  StoreModule,
  StoreService,
} from './rest/store';

export const ResouceModules = [
  ProductModule,
  PriceModule,
  DepartmentModule,
  CategoryModule,
  SkuModule,
  QuantityModule,
  PricelevelModule,
  StoreModule,
  SkuModule,
  TypeOrmModule.forFeature([
    Product,
    Category,
    Department,
    Quantity,
    Store,
    Price,
    Pricelevel,
    Sku,
  ]),
];

@Module({
  imports: [...ResouceModules],
  providers: [
    CategoryService,
    ProductService,
    DepartmentService,
    SkuService,
    PriceService,
    StoreService,
    QuantityService,
  ],
})
export class InventoryModule implements OnModuleInit {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly departmentService: DepartmentService,
    private readonly productService: ProductService
  ) {}

  async onModuleInit() {
    for (let i = 0; i < 50; i++) {
      let cat: any;
      let dep: any;
      try {
        cat = await this.categoryService.save({ name: commerce.department() });
      } catch (err) {
        // ignore
      }
      try {
        dep = await this.departmentService.save({
          name: commerce.department(),
        });
      } catch (err) {
        // ignore
      }

      for (let j = 0; j < 5; j++) {
        try {
          await this.productService.save({
            name: commerce.productName(),
            description: commerce.productDescription(),
            category: cat,
            department: dep,
          });
        } catch (err) {
          //
        }
      }
    }
  }
}
