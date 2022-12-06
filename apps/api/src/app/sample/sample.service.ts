import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Sample } from './entity/sample.entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample)
    private readonly sampleRepository: Repository<Sample>
  ) {}

  find() {
    return this.sampleRepository.find();
  }

  save(sample: Sample) {
    return this.sampleRepository.save(sample);
  }

  findOneBy(query: any) {
    return this.sampleRepository.findOneBy(query);
  }
}
