import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppResolver } from './app.resolver';

import { CategoryModule } from '@ae/rest/inventory/category';
import { ClockinModule } from '@ae/rest/inventory/clockin';
import { CommentModule } from '@ae/rest/inventory/comment';
import { CustomerModule } from '@ae/rest/inventory/customer';
import { DepartmentModule } from '@ae/rest/inventory/department';
import { EmployeeModule } from '@ae/rest/inventory/employee';
import { OrderModule } from '@ae/rest/inventory/order';
import { PermissionModule } from '@ae/rest/inventory/permission';
import { PriceModule } from '@ae/rest/inventory/price';
import { PriceLevelModule } from '@ae/rest/inventory/price-level';
import { ProductModule } from '@ae/rest/inventory/product';
import { QuantityModule } from '@ae/rest/inventory/quantity';
import { RoleModule } from '@ae/rest/inventory/role';
import { StoreModule } from '@ae/rest/inventory/store';
import { TaskModule } from '@ae/rest/inventory/task';
import { TransactionModule } from '@ae/rest/inventory/transaction';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/api/database/main.sqlite',
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true,
    }),
    ProductModule,
    CategoryModule,
    DepartmentModule,
    PriceModule,
    PriceLevelModule,
    StoreModule,
    CustomerModule,
    RoleModule,
    PermissionModule,
    OrderModule,
    TransactionModule,
    EmployeeModule,
    TaskModule,
    CommentModule,
    ClockinModule,
    QuantityModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 10,
      max: 10,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],

  providers: [AppResolver],
})
export class AppModule {}
