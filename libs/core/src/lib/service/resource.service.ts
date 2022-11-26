import { Repository } from 'typeorm';

export class ResourceService<T> {
  constructor(private readonly __repo: Repository<T>) {}

  save(item: T) {
    return this.__repo.save(item);
  }

  findAll() {
    return this.__repo.find();
  }
}
