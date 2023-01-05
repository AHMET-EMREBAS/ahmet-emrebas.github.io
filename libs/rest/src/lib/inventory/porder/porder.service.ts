import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Porder, CreatePorderDto } from '@ae/models/inventory/porder';

@Injectable()
export class PorderService extends ResourceService<CreatePorderDto> {
  constructor(@InjectRepository(Porder) __repo: Repository<CreatePorderDto>) {
    super(__repo);
  }
}
