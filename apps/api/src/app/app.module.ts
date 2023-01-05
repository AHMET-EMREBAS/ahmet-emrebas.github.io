import * as RestModules from '@ae/rest/inventory';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppResolver } from './app.resolver';
console.log(Object.values(RestModules));

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/api/database/main.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    ...Object.values(RestModules),

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
