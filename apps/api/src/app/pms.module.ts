import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from '@ae/rest/pms/category/CategoryModule';

import { DepartmentModule } from '@ae/rest/pms/department/DepartmentModule';

import { PricelevelModule } from '@ae/rest/pms/pricelevel/PricelevelModule';

import { CartModule } from '@ae/rest/pms/cart/CartModule';

import { StoreModule } from '@ae/rest/pms/store/StoreModule';

import { ProductModule } from '@ae/rest/pms/product/ProductModule';

import { PriceModule } from '@ae/rest/pms/price/PriceModule';

import { QuantityModule } from '@ae/rest/pms/quantity/QuantityModule';

import { OrderModule } from '@ae/rest/pms/order/OrderModule';

import { TransactionModule } from '@ae/rest/pms/transaction/TransactionModule';

import { UserModule } from '@ae/rest/pms/user/UserModule';

import { CustomerModule } from '@ae/rest/pms/customer/CustomerModule';

import { PermissionModule } from '@ae/rest/pms/permission/PermissionModule';

import { MessageModule } from '@ae/rest/pms/message/MessageModule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/pms/pms.sqlite',
      autoLoadEntities: true,
      dropSchema: true,
      synchronize: true,
    }),

    CategoryModule,

    DepartmentModule,

    PricelevelModule,

    CartModule,

    StoreModule,

    ProductModule,

    PriceModule,

    QuantityModule,

    OrderModule,

    TransactionModule,

    UserModule,

    CustomerModule,

    PermissionModule,

    MessageModule,
  ],
})
export class PmsModule {}
