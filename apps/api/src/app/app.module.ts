import { CacheModule, Module } from '@nestjs/common';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/api/database/main.sqlite',
      synchronize: true,
      autoLoadEntities: true,
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
