/* eslint-disable @typescript-eslint/no-explicit-any */
import { Equal, ObjectLiteral, Repository } from 'typeorm';
import { QueryDto, RelationParam, RelationUnsetParam } from '../dto';
import {
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ServerLogger } from '@techbir/common';

export class ResourceService<T extends ObjectLiteral = any> {
  logger = new ServerLogger();
  constructor(
    protected readonly __repo: Repository<T>,
    protected readonly __uniques?: string[]
  ) {
    this.logger.setContext(__repo.metadata.name + 'Service');
  }

  private async throwIfNotUnique(body: T) {
    for (const u of this.__uniques || []) {
      const found = await this.__repo.findOne({
        where: { [u]: Equal(body[u]) },
      } as any);

      if (found) {
        throw new UnprocessableEntityException(`${u as string} must be unique`);
      }
    }
  }

  async findAll(query: QueryDto) {
    this.logger.debug('Query', [query]);
    return await this.__repo.find({ ...(query as any) });
  }

  async findOneById(id: number) {
    try {
      return await this.__repo.findOneByOrFail({ id } as any);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async insert(body: any) {
    await this.throwIfNotUnique(body);
    try {
      const result = await this.__repo.insert(body);
      const savedId = result.identifiers[0]['id'];

      if (savedId) {
        return await this.findOneById(savedId);
      }
      throw new UnprocessableEntityException();
    } catch (err) {
      console.error(err);
      throw new UnprocessableEntityException();
    }
  }

  async save(body: T) {
    await this.throwIfNotUnique(body);
    try {
      const saved = await this.__repo.save(body);
      return await this.findOneById(saved['id']);
    } catch (err) {
      console.error(err);
      throw new UnprocessableEntityException();
    }
  }

  async update(id: number, body: Partial<T>) {
    try {
      await this.__repo.update(id, body);
      return await this.findOneById(id);
    } catch (err) {
      console.error(err);
      throw new UnprocessableEntityException();
    }
  }

  async delete(id: number) {
    const found = await this.findOneById(id);
    try {
      await this.__repo.delete(id);
      return found;
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
  }

  async addRelation({ id, relationId, relationName }: RelationParam) {
    await this.findOneById(id);
    try {
      await this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .add(relationId);

      return await this.findOneById(id);
    } catch (err) {
      console.error(err);
      throw new UnprocessableEntityException();
    }
  }

  async removeRelation({ id, relationId, relationName }: RelationParam) {
    await this.findOneById(id);
    try {
      await this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .relation(relationName)
        .of(id)
        .remove(relationId);
      return await this.findOneById(id);
    } catch (err) {
      console.error(err);
      throw new UnprocessableEntityException();
    }
  }

  async setRelation({ id, relationId, relationName }: RelationParam) {
    const found = await this.findOneById(id);
    try {
      await this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(relationId);
      return await this.findOneById(id);
    } catch (err) {
      console.error(err);
      throw new UnprocessableEntityException();
    }
  }

  async unsetRelation({ id, relationName }: RelationUnsetParam) {
    const found = await this.findOneById(id);
    try {
      await this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(null);
      return await this.findOneById(id);
    } catch (err) {
      console.error(err);
      throw new UnprocessableEntityException();
    }
  }

  async findOneBy(key: string, value: string) {
    return await this.__repo.findOneBy({ [key]: Equal(value) } as any);
  }

  async findOneByOrFail(key: string, value: string) {
    try {
      return await this.__repo.findOneByOrFail({ [key]: Equal(value) } as any);
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
