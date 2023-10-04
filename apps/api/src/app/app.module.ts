import { AppController } from './app.controller';
import { AppGraphModule } from './app-graph.module';
import { AppService } from './app.service';
import { AuthGuard, AuthModule } from '@techbir/auth';
import { ConfigModule } from '@nestjs/config';
import { GmailModule } from '@techbir/mail';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionModule, RoleModule, UserModule } from '@techbir/resources';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'testdb',
      username: 'testuser',
      password: 'testuser',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    AuthModule,
    UserModule,
    RoleModule,
    PermissionModule,
    AppGraphModule,
    GmailModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
