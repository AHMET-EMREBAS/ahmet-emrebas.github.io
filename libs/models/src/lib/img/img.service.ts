import { ResourceService } from '@ae/core/rest';
import { Img } from './img.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImgService extends ResourceService<Img> {
  constructor(@InjectRepository(Img) repo: Repository<Img>) {
    super(repo);
  }
}
