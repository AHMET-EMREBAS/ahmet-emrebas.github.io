import {
  DeepPartial,
  Equal,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { v4 } from 'uuid';

import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

export class ResourceService<T> {
  private readonly uniqueColumns!: string[];
  private readonly logger = new Logger(
    this.__repo.metadata.targetName + ' Service'
  );
  constructor(public readonly __repo: Repository<T>) {
    this.uniqueColumns = this.__repo.metadata.uniques.map(
      (e) => e.columns[0].propertyName
    );
  }

  async isUnique(obj: T) {
    for (const c of this.uniqueColumns) {
      const found = await this.__repo.findOne({
        where: { name: Equal(obj[c]) } as any,
      });

      if (found) {
        const message = `${c} must be unique!`;

        throw new BadRequestException({ [c]: { unique: message } });
      }
    }
  }

  find(options?: FindManyOptions<T>) {
    try {
      return this.__repo.find(options);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  findOne(options?: FindOneOptions<T>) {
    try {
      return this.__repo.findOne(options);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  findOneBy(options?: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneBy(options);
    } catch (err) {
      this.logger.error(err);
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
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  findAndCountBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findAndCountBy(options);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  findBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findBy(options);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  findOneOrFail(options: FindOneOptions<T>) {
    try {
      return this.__repo.findOneOrFail(options);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  findOneByOrFail(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneByOrFail(options);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  create(t: DeepPartial<T>) {
    try {
      return this.__repo.create({ ...t, uuid: v4() });
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  async save(t: T) {
    await this.isUnique(t);
    try {
      return await this.__repo.save({ ...t, uuid: v4() });
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async update(id: number, updated: QueryDeepPartialEntity<T>) {
    try {
      return await this.__repo.save({
        ...updated,
        id: id,
      } as unknown as DeepPartial<T>);
    } catch (err) {
      this.logger.error(err);
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
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  count(options?: FindManyOptions<T>) {
    try {
      return this.__repo.count(options);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  async softDelete(id: number) {
    try {
      return (await this.__repo.softDelete(id)).affected > 0;
    } catch (err) {
      this.logger.error(err);
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
  add(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .add(relationId);
    } catch (err) {
      this.logger.error(err);
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
  set(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(relationId);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }

  /**
   * Remove many to one relationship
   * @param id
   * @param relationName
   * @returns
   */
  unset(id: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(null);
    } catch (err) {
      this.logger.error(err);
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
  remove(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .remove(relationId);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException();
    }
  }
}
