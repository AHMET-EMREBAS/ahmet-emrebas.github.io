/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BodyArg,
  EndPointManager,
  IdArg,
  QueryArg,
  RelationArg,
  RelationUnsetArg,
} from '../helpers';
import { RelationParam, RelationUnsetParam } from '../dto';
import { ResourceService } from './resource.service';
import { ResourceClasses } from './resource-classes';

export function createResolver(options: ResourceClasses): any {
  const End = new EndPointManager(options);
  const { createDto, updateDto, queryDto, pubSub } = options;

  class BaseResolver {
    constructor(private readonly __service: ResourceService) {}

    @End.GFindAll()
    findAll(@QueryArg(queryDto) query?: any) {
      return this.__service.findAll(query);
    }

    @End.GFindOneById()
    findOneById(@IdArg() id: number) {
      return this.__service.findOneById(id);
    }

    @End.GSave()
    async save(@BodyArg(createDto) body: any) {
      return await this.__service.insert(body);
    }

    @End.GUpdate()
    async upate(@IdArg() id: number, @BodyArg(updateDto) body: any) {
      return await this.__service.update(id, body);
    }

    @End.GDelete()
    async delete(@IdArg() id: number) {
      return await this.__service.delete(id);
    }

    @End.GAddRelation()
    addRelation(@RelationArg() options: RelationParam) {
      return this.__service.addRelation(options);
    }

    @End.GRemoveRelation()
    removeRelation(@RelationArg() options: RelationParam) {
      return this.__service.removeRelation(options);
    }

    @End.GSetRelation()
    setRelation(@RelationArg() options: RelationParam) {
      return this.__service.setRelation(options);
    }

    @End.GSetRelation()
    unsetRelation(@RelationUnsetArg() options: RelationUnsetParam) {
      return this.__service.unsetRelation(options);
    }

    // Subscriptions
    @End.SavedSubscription()
    subscribeSavedEvent() {
      return pubSub.asyncIterator(End.SAVED_SUB_NAME);
    }

    @End.DeletedSubscription()
    subscribeDeletedEvent() {
      return pubSub.asyncIterator(End.DELETED_SUB_NAME);
    }

    @End.ChangeSubscription()
    subscribeChangedEvent() {
      return pubSub.asyncIterator(End.CHANGED_SUB_NAME);
    }
  }

  return BaseResolver;
}
