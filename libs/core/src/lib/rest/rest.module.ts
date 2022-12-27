import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ClassConstructor } from '../types';
import { RestControllerFactory } from './rest.controller';

@Module({})
export class RestModule {
  static configure(options: TypeOrmModuleOptions): DynamicModule {
    return {
      module: RestModule,
      imports: [
        TypeOrmModule.forRoot({
          ...options,
        }),
        TypeOrmModule.forFeature(
          options.entities as ClassConstructor<unknown>[],
          options.name
        ),
      ],
      controllers: [
        ...(options.entities as ClassConstructor<unknown>[]).map((e) =>
          RestControllerFactory({ appname: options.name, entity: e })
        ),
      ],
    };
  }
}
