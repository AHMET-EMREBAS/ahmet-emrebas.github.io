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
import { Sprint } from '@ae/models/pms/sprint/Sprint';
import { SprintView } from '@ae/models/pms/sprint/SprintView';
import { SprintOptionView } from '@ae/models/pms/sprint/SprintOptionView';
import { CreateSprintDto } from '@ae/models/pms/sprint/dto/CreateSprintDto';
import { UpdateSprintDto } from '@ae/models/pms/sprint/dto/UpdateSprintDto';

import { SprintService } from './SprintService';
import { SprintViewService } from './SprintViewService';
import { SprintOptionViewService } from './SprintOptionViewService';

@Resolver(Sprint)
export class SprintResolver {
  constructor(
    private readonly service: SprintService,
    private readonly viewService: SprintViewService,
    private readonly optionViewService: SprintOptionViewService
  ) {}

  @GRead(Sprint)
  findSprint(@Args('query') query: QueryDto<Sprint & SprintView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Sprint)
  findBySprintId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Sprint)
  saveSprint(@Args('sprint') body: CreateSprintDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updateSprint(@ArgId() id: number, @Args('sprint') body: UpdateSprintDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteSprint(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GSet('project')
  setSprintProject(@ArgId() id: number, @ArgRid() projectId: number) {
    return this.service.set(id, projectId, 'project');
  }

  @GUnset('project')
  unsetSprintProject(@ArgId() id: number) {
    return this.service.unset(id, 'project');
  }

  @GCount()
  countSprint() {
    return this.service.count();
  }

  @GOptions()
  optionsSprint(@Args('query') query: QueryDto<Sprint & SprintView>) {
    return this.optionViewService.find(query);
  }
}
