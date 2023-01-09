import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ManyToMany } from 'typeorm';
import { AppResolver } from './app.resolver';

class A {
  @ManyToMany(() => A, (a) => a.id, { cascade: '' })
  p: string;
}
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/api/database/main.sqlite',
      autoLoadEntities: true,
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
