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
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';
import { PricelevelView } from '@ae/models/pms/pricelevel/PricelevelView';
import { PricelevelOptionView } from '@ae/models/pms/pricelevel/PricelevelOptionView';
import { CreatePricelevelDto } from '@ae/models/pms/pricelevel/dto/CreatePricelevelDto';
import { UpdatePricelevelDto } from '@ae/models/pms/pricelevel/dto/UpdatePricelevelDto';

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

  @GRead(Pricelevel)
  findPricelevel(@Args('query') query: QueryDto<Pricelevel & PricelevelView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Pricelevel)
  findByPricelevelId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Pricelevel)
  savePricelevel(@Args('pricelevel') body: CreatePricelevelDto) {
    return this.service.save(body);
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
  optionsPricelevel(
    @Args('query') query: QueryDto<Pricelevel & PricelevelView>
  ) {
    return this.optionViewService.find(query);
  }
}
