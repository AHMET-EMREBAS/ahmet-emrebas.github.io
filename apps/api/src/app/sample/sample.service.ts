import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateSampleDto, UpdateSampleDto } from './dto';
import { Sample, SampleView } from './entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample) private readonly mainRepo: Repository<Sample>,
    @InjectRepository(SampleView)
    private readonly viewRepo: Repository<SampleView>
  ) {}

  find(options?: FindManyOptions<SampleView>) {
    return this.viewRepo.find(options);
  }
  findById(id: number) {
    return this.viewRepo.findOneBy({ id });
  }
  save(body: CreateSampleDto) {
    return this.mainRepo.save(body);
  }
  update(id: number, body: UpdateSampleDto) {
    return this.mainRepo.update(id, body);
  }
  delete(id: number) {
    return this.mainRepo.delete(id);
  }
  count() {
    return this.mainRepo.count();
  }
}
