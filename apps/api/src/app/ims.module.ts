import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartModule } from '@ae/rest/ims/cart/CartModule';

import { StoreModule } from '@ae/rest/ims/store/StoreModule';

import { ProductModule } from '@ae/rest/ims/product/ProductModule';

import { PriceModule } from '@ae/rest/ims/price/PriceModule';

import { QuantityModule } from '@ae/rest/ims/quantity/QuantityModule';

import { OrderModule } from '@ae/rest/ims/order/OrderModule';

import { TransactionModule } from '@ae/rest/ims/transaction/TransactionModule';

import { UserModule } from '@ae/rest/ims/user/UserModule';

import { CustomerModule } from '@ae/rest/ims/customer/CustomerModule';

import { CategoryModule } from '@ae/rest/ims/category/CategoryModule';

import { PricelevelModule } from '@ae/rest/ims/pricelevel/PricelevelModule';

import { PermissionModule } from '@ae/rest/ims/permission/PermissionModule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/database/ims.sqlite',
      autoLoadEntities: true,
      dropSchema: true,
      synchronize: true,
    }),

    CartModule,

    StoreModule,

    ProductModule,

    PriceModule,

    QuantityModule,

    OrderModule,

    TransactionModule,

    UserModule,

    CustomerModule,

    CategoryModule,

    PricelevelModule,

    PermissionModule,
  ],
})
export class ImsModule {}
