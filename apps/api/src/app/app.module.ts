import { CacheModule, Module } from '@nestjs/common';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { RestModule } from '@ae/core/rest';
import { Product } from '@ae/models/product';
import { Category } from '@ae/models/category';
import { ProductSubscriber } from './product.subscriber';

@Module({
  imports: [
    RestModule.configure({
      name: 'inventory',
      type: 'better-sqlite3',
      database: 'dist/temp/inventory.sqlite',
      entities: [Product, Category],
      subscribers: [ProductSubscriber],
      synchronize: true,
      dropSchema: true,
    }),
    RestModule.configure({
      name: 'pma',
      type: 'better-sqlite3',
      database: 'dist/temp/pma.sqlite',
      entities: [Product, Category],
      subscribers: [ProductSubscriber],
      synchronize: true,
      dropSchema: true,
    }),

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
