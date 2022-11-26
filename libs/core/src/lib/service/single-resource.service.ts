import { FindManyOptions, Repository } from 'typeorm';

export class SingleResourceService<T> {
  constructor(private readonly __repo: Repository<T>) {}

  save(item: T) {
    return this.__repo.save(item);
  }

  findAll(findManyOptions: FindManyOptions<T>) {
    return this.__repo.find(findManyOptions);
  }

  findOne(id: number) {
    return this.__repo.findOneByOrFail({ id } as any);
  }

  update(id: number, body: T) {
    return this.__repo.update(id, body as any);
  }

  delete(id: number) {
    return this.__repo.delete(id);
  }
}
