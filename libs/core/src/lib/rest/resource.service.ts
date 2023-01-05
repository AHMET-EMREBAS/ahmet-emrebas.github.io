import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { InternalServerErrorException } from '@nestjs/common';
import { IdDto } from '../dto';
import { AddRelationDto } from '../dto/add-relation.dto';
import { RemoveRelationDto } from '../dto/remove-relation.dto';
import { SetRelationDto } from '../dto/set-relation.dto';
import { UnsetRelationDto } from '../dto/unset-relation.dto';

export class ResourceService<T extends IdDto> {
  constructor(public readonly __repo: Repository<T>) {}

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

  findOneById(id: number) {
    return this.findOneBy({ id } as unknown as FindOptionsWhere<T>);
  }

  findAndCount(options?: FindManyOptions<T>) {
    try {
      return this.__repo.findAndCount(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findAndCountBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findAndCountBy(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findBy(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findOneOrFail(options: FindOneOptions<T>) {
    try {
      return this.__repo.findOneOrFail(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findOneByOrFail(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneByOrFail(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async save(t: T) {
    try {
      return await this.__repo.save({ ...t });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updated: QueryDeepPartialEntity<T>) {
    try {
      return await this.__repo.save({
        ...updated,
        id: id,
      } as unknown as DeepPartial<T>);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async delete(id: number) {
    const deleteResult = await this.__repo.delete(id);
    return deleteResult.affected > 0;
  }

  async recover(id: number) {
    try {
      const found = await this.__repo.findOne({
        where: { id } as unknown as FindOptionsWhere<T>,
        withDeleted: true,
      });
      return await this.__repo.recover(found);
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

  async softDelete(id: number) {
    try {
      return (await this.__repo.softDelete(id)).affected > 0;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Add many to  many relation ship
   * @param id
   * @param relationId
   * @param relationName
   * @returns
   */
  add(ard: AddRelationDto) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(ard.rname)
        .of(ard.id)
        .add(ard.rid);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Add many to one relationship
   * @param id
   * @param relationId
   * @param relationName
   * @returns
   */
  set(srd: SetRelationDto) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(srd.rname)
        .of(srd.id)
        .set(srd.rid);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Remove many to one relationship
   * @param id
   * @param relationName
   * @returns
   */
  unset(usd: UnsetRelationDto) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(usd.rname)
        .of(usd.id)
        .set(null);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Remove many to many relationship
   * @param id
   * @param relationId
   * @param relationName
   * @returns
   */
  remove(rrd: RemoveRelationDto) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(rrd.rname)
        .of(rrd.id)
        .remove(rrd.rid);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
