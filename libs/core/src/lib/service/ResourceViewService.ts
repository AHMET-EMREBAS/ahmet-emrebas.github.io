import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

import { InternalServerErrorException } from '@nestjs/common';

export class ResourceViewService<T> {
  constructor(private readonly __repo: Repository<T>) {}

  find(options?: FindManyOptions<T>) {
    try {
      return this.__repo.find(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findOne(options?: FindOneOptions<T>) {
    try {
      return this.__repo.findOne(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findOneBy(options?: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneBy(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  count(options?: FindManyOptions<T>) {
    try {
      return this.__repo.count(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
