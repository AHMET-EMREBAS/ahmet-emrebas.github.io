import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Clockin, CreateClockinDto } from '@ae/models/inventory/clockin';

@Injectable()
export class ClockinService extends ResourceService<CreateClockinDto> {
  constructor(@InjectRepository(Clockin) __repo: Repository<CreateClockinDto>) {
    super(__repo);
  }
}
