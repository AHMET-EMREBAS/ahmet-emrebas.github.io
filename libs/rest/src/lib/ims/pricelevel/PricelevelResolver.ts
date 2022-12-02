import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  GWriteMany,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Pricelevel } from '@ae/models/ims/pricelevel/Pricelevel';
import { PricelevelView } from '@ae/models/ims/pricelevel/PricelevelView';
import { PricelevelOptionView } from '@ae/models/ims/pricelevel/PricelevelOptionView';
import { CreatePricelevelDto } from '@ae/models/ims/pricelevel/dto/CreatePricelevelDto';
import { UpdatePricelevelDto } from '@ae/models/ims/pricelevel/dto/UpdatePricelevelDto';
import { ReadPricelevelDto } from '@ae/models/ims/pricelevel/dto/ReadPricelevelDto';
import { QueryPricelevelDto } from '@ae/models/ims/pricelevel/dto/QueryPricelevelDto';

import { PricelevelService } from './PricelevelService';
import { PricelevelViewService } from './PricelevelViewService';
import { PricelevelOptionViewService } from './PricelevelOptionViewService';

@Resolver(Pricelevel)
export class PricelevelResolver {
  constructor(
    private readonly service: PricelevelService,
    private readonly viewService: PricelevelViewService,
    private readonly optionViewService: PricelevelOptionViewService
  ) {}

  @GRead(ReadPricelevelDto)
  findPricelevels(
    @Args('query', { nullable: true }) query: QueryDto<Pricelevel>,
    @Args('where', { nullable: true }) where: QueryPricelevelDto
  ) {
    return this.service.find({ ...query, where });
  }

  @GRead(PricelevelView)
  viewPricelevels(
    @Args('query', { nullable: true }) query: QueryDto<PricelevelView>,
    @Args('where', { nullable: true }) where: QueryPricelevelDto
  ) {
    return this.viewService.find({ ...query, where });
  }

  @GReadById(ReadPricelevelDto)
  findByPricelevelId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(PricelevelView)
  viewByPricelevelId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadPricelevelDto)
  savePricelevel(@Args('pricelevel') body: CreatePricelevelDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadPricelevelDto)
  savePricelevels(
    @Args('pricelevels', { type: () => [CreatePricelevelDto] })
    body: CreatePricelevelDto[]
  ) {
    return this.service.saveMany(body);
  }

  @GUpdate()
  updatePricelevel(
    @ArgId() id: number,
    @Args('pricelevel') body: UpdatePricelevelDto
  ) {
    return this.service.update(id, body);
  }

  @GDelete()
  deletePricelevel(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GCount()
  countPricelevel() {
    return this.service.count();
  }

  @GOptions()
  optionsPricelevel(@Args('query') query: QueryDto<PricelevelOptionView>) {
    return this.optionViewService.find(query);
  }
}
