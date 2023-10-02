import {
  Delete,
  Get,
  Post,
  Put,
  UnprocessableEntityException,
  applyDecorators,
} from '@nestjs/common';
import { ApiPaths, getApiPaths, plural } from '@techbir/utils';

import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Mutation, Query as GraphQuery, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import {
  PublishOnChangeInterceptor,
  PublishOnDeleteInterceptor,
  PublishOnSaveInterceptor,
} from '../interceptors';
import { ClassConstructor } from 'class-transformer';

const API_NOT_FOUND_DESCRIPTION = 'Could not find the entity by the id!';

export type EndPointOptions = {
  entity: ClassConstructor<any>;
  createDto: ClassConstructor<any>;
  updateDto: ClassConstructor<any>;
  queryDto: ClassConstructor<any>;
  pubSub: PubSub;
};
export class EndPointManager {
  readonly TAG: string;
  readonly NAME: string;
  readonly SINGULAR: string;
  readonly PLURAL: string;
  readonly PATHS: Readonly<ApiPaths>;
  readonly entity: ClassConstructor<any>;
  readonly createDto: ClassConstructor<any>;
  readonly updateDto: ClassConstructor<any>;
  readonly queryDto: ClassConstructor<any>;
  readonly pubSub: PubSub;
  readonly SAVED_SUB_NAME: string;
  readonly DELETED_SUB_NAME: string;
  readonly CHANGED_SUB_NAME: string;

  constructor({
    pubSub,
    entity,
    createDto,
    updateDto,
    queryDto,
  }: EndPointOptions) {
    this.NAME = entity.name;
    this.PATHS = getApiPaths(this.NAME);
    this.SINGULAR = this.NAME;
    this.PLURAL = plural(this.SINGULAR);
    this.TAG = `${this.SINGULAR} Controller`;
    this.entity = entity;
    this.createDto = createDto;
    this.updateDto = updateDto;
    this.queryDto = queryDto;
    this.SAVED_SUB_NAME = `subscribe${this.SINGULAR}SavedEvent`;
    this.DELETED_SUB_NAME = `subscribe${this.SINGULAR}DeletedEvent`;
    this.CHANGED_SUB_NAME = `subscribe${this.SINGULAR}ChangedEvent`;

    this.pubSub = pubSub;
  }

  FindAll() {
    return applyDecorators(
      ApiTags('Read'),
      ApiOperation({ summary: `Find All ${this.PLURAL}` }),
      ApiOkResponse({
        type: this.entity,
        isArray: true,
        description: 'Success',
      }),
      ApiNotFoundResponse({ description: API_NOT_FOUND_DESCRIPTION }),
      ApiQuery({ type: this.queryDto }),
      Get(this.PATHS.PLURAL_PATH)
    );
  }

  FindOneById() {
    return applyDecorators(
      ApiTags('Read'),
      ApiOperation({ summary: 'Find one by id' }),
      ApiOkResponse({ type: this.entity, description: 'Success' }),
      ApiNotFoundResponse({ description: API_NOT_FOUND_DESCRIPTION }),
      Get(this.PATHS.BY_ID_PATH)
    );
  }

  SaveOne() {
    return applyDecorators(
      ApiTags('Create'),
      ApiOperation({ summary: `Save ${this.SINGULAR}` }),
      ApiCreatedResponse({ type: this.entity, description: 'Success' }),
      ApiUnprocessableEntityResponse({
        type: UnprocessableEntityException,
      }),
      ApiBody({ type: this.createDto }),
      Post(this.PATHS.SINGULAR_PATH),
      PublishOnSaveInterceptor(this)
    );
  }

  UpdateOne() {
    return applyDecorators(
      ApiTags('Update'),
      ApiOperation({ summary: `Update ${this.SINGULAR}` }),
      ApiCreatedResponse({ type: this.entity, description: 'Success' }),
      ApiUnprocessableEntityResponse({ type: UnprocessableEntityException }),
      ApiNotFoundResponse({ description: API_NOT_FOUND_DESCRIPTION }),
      ApiBody({ type: this.updateDto }),
      Put(this.PATHS.BY_ID_PATH),
      PublishOnChangeInterceptor(this)
    );
  }

  DeleteOne() {
    return applyDecorators(
      ApiTags('Delete'),
      ApiOperation({ summary: `Delete ${this.SINGULAR} By Id` }),
      ApiOkResponse({ type: Boolean, description: 'Success' }),
      ApiUnprocessableEntityResponse({ type: UnprocessableEntityException }),
      ApiNotFoundResponse({ description: API_NOT_FOUND_DESCRIPTION }),
      Delete(this.PATHS.BY_ID_PATH),
      PublishOnDeleteInterceptor(this)
    );
  }

  AddRelation() {
    return applyDecorators(
      ApiTags('Relations'),
      ApiOperation({ summary: `Add relation by id to ${this.SINGULAR}` }),
      ApiOkResponse({ type: Boolean, description: 'Success' }),
      ApiUnprocessableEntityResponse(),
      ApiNotFoundResponse({ description: API_NOT_FOUND_DESCRIPTION }),
      Put(this.PATHS.RELATION_NAME_AND_ID_PATH),
      PublishOnChangeInterceptor(this)
    );
  }

  RemoveRelation() {
    return applyDecorators(
      ApiTags('Relations'),
      ApiOperation({
        summary: `Delete relation by id from ${this.SINGULAR}`,
      }),
      ApiOkResponse({ type: Boolean, description: 'Success' }),
      ApiNotFoundResponse({ description: API_NOT_FOUND_DESCRIPTION }),
      Delete(this.PATHS.RELATION_NAME_AND_ID_PATH),
      PublishOnChangeInterceptor(this)
    );
  }

  SetRelation() {
    return applyDecorators(
      ApiTags('Relations'),
      ApiOperation({ summary: `Set relation by id to ${this.SINGULAR}` }),
      ApiOkResponse({ type: Boolean, description: 'Success' }),
      ApiNotFoundResponse({ description: API_NOT_FOUND_DESCRIPTION }),
      Post(this.PATHS.RELATION_NAME_AND_ID_PATH),
      PublishOnChangeInterceptor(this)
    );
  }

  UnsetRelation() {
    return applyDecorators(
      ApiTags('Relations'),
      ApiOperation({ summary: `Unset relation from ${this.SINGULAR}` }),
      ApiOkResponse({ type: Boolean, description: 'Success' }),
      ApiNotFoundResponse({ description: API_NOT_FOUND_DESCRIPTION }),
      Delete(this.PATHS.RELATION_NAME_PATH),
      PublishOnChangeInterceptor(this)
    );
  }

  // GraphQL
  GFindAll() {
    return GraphQuery(() => [this.entity], {
      name: `find${this.PLURAL}`,
      nullable: true,
      description: 'Find all entitites by query',
    });
  }

  GFindOneById() {
    return GraphQuery(() => this.entity, {
      name: `find${this.SINGULAR}`,
      nullable: true,
      description: 'Find entity by id.',
    });
  }

  GSave() {
    return applyDecorators(
      Mutation(() => this.entity, {
        name: `new${this.SINGULAR}`,
        description: 'Save entity.',
      }),
      PublishOnSaveInterceptor(this)
    );
  }

  GUpdate() {
    return applyDecorators(
      Mutation(() => this.entity, {
        name: `update${this.SINGULAR}`,
        description: 'Udpate entity by id.',
      }),
      PublishOnChangeInterceptor(this)
    );
  }

  GDelete() {
    return applyDecorators(
      Mutation(() => this.entity, {
        name: `delete${this.SINGULAR}`,
        description: 'Delete entity by id.',
      }),
      PublishOnDeleteInterceptor(this)
    );
  }

  GAddRelation() {
    return applyDecorators(
      Mutation(() => this.entity, {
        name: `addTo${this.SINGULAR}`,
        description: 'Add relation (many-to-many) to the entity.',
      }),
      PublishOnChangeInterceptor(this)
    );
  }

  GRemoveRelation() {
    return applyDecorators(
      Mutation(() => this.entity, {
        name: `removeFrom${this.SINGULAR}`,
        description: 'Add relation (many-to-many) to the entity.',
      }),
      PublishOnChangeInterceptor(this)
    );
  }

  GSetRelation() {
    return applyDecorators(
      Mutation(() => this.entity, {
        name: `setTo${this.SINGULAR}`,
        description: 'Set relation (many-to-one) to the entity.',
      }),
      PublishOnChangeInterceptor(this)
    );
  }

  GUnsetRelation() {
    return applyDecorators(
      Mutation(() => this.entity, {
        name: `unsetFrom${this.SINGULAR}`,
        description: 'Unset relation (many-to-one) from the entity.',
      }),
      PublishOnChangeInterceptor(this)
    );
  }

  SavedSubscription() {
    return Subscription(() => this.entity, {
      name: this.SAVED_SUB_NAME,
      description: 'Subscription for save event.',
    });
  }

  DeletedSubscription() {
    return Subscription(() => this.entity, {
      name: this.DELETED_SUB_NAME,
      description: 'Subscription for delete event.',
    });
  }

  ChangeSubscription() {
    return Subscription(() => this.entity, {
      name: this.CHANGED_SUB_NAME,
      description: 'Subscription for change event.',
    });
  }

  private pub(name: string, payload: unknown) {
    this.pubSub.publish(name, { [name]: payload });
  }

  // Publishers
  publishSavedEvent(e: unknown) {
    this.publishChangedEvent(e);
    this.pub(this.SAVED_SUB_NAME, e);
  }

  publishDeletedEvent(e: unknown) {
    this.publishChangedEvent(e);
    this.pub(this.DELETED_SUB_NAME, e);
  }

  publishChangedEvent(e: unknown) {
    this.pub(this.CHANGED_SUB_NAME, e);
  }
}
