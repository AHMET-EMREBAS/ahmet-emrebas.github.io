import { AppController } from './app.controller';
import { AppGraphModule } from './app-graph.module';
import { AppService } from './app.service';
import { AuthModule } from '@techbir/auth';
import { ConfigModule } from '@nestjs/config';
import { GmailModule } from '@techbir/mail';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionModule, RoleModule, UserModule } from '@techbir/resources';

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
    UserModule,
    RoleModule,
    PermissionModule,
    AppGraphModule,
    GmailModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
