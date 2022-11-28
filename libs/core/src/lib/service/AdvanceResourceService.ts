import { Repository } from 'typeorm';
import { MinimalResourceService } from './MinimalResourceService';

export class AdvanceResourceService<T> extends MinimalResourceService<T> {
  constructor(repo: Repository<T>) {
    super(repo);
  }
}
