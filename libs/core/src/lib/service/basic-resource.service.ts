import { Repository } from 'typeorm';
import { SingleResourceService } from './single-resource.service';

export class BasicResourceService<T> extends SingleResourceService<T> {
  constructor(repo: Repository<T>) {
    super(repo);
  }
}
