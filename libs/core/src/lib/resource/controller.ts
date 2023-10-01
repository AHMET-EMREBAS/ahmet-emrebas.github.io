/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, EndPointManager, IdParam, NestQuery } from '../helpers';
import { QueryDto, RelationParam, RelationUnsetParam } from '../dto';
import { ResourceService } from './resource.service';
import { ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResourceClasses } from './resource-classes';

const valiationPipe = (dto: any) => {
  return new ValidationPipe({
    transform: true,
    expectedType: dto,
    transformOptions: {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    },
  });
};

export function createController(options: ResourceClasses): any {
  const { entity, queryDto } = options;
  const End = new EndPointManager(options);

  @ApiTags(End.TAG)
  class Controller {
    constructor(
      private readonly __service: ResourceService<typeof entity>
    ) {}

    @End.FindAll()
    findAll(@NestQuery(valiationPipe(queryDto)) query: Partial<QueryDto>) {
      console.log(`${new Date().toTimeString()} ${query}`);
      return this.__service.findAll(query);
    }

    @End.FindOneById()
    findOneById(@IdParam() id: number) {
      console.log(`${new Date().toTimeString()} ${id}`);
      return this.__service.findOneById(id);
    }

    @End.SaveOne()
    async save(@Body() body: any) {
      return await this.__service.insert(body);
    }

    @End.UpdateOne()
    async update(@IdParam() id: number, @Body() body: any) {
      return await this.__service.update(id, body);
    }

    @End.DeleteOne()
    async delete(@IdParam() id: number) {
      return await this.__service.delete(id);
    }

    @End.AddRelation()
    addRelation(@NestQuery() options: RelationParam) {
      return this.__service.addRelation(options);
    }

    @End.RemoveRelation()
    removeRelation(@NestQuery() options: RelationParam) {
      return this.__service.removeRelation(options);
    }

    @End.SetRelation()
    setRelation(@NestQuery() options: RelationParam) {
      return this.__service.setRelation(options);
    }

    @End.UnsetRelation()
    unsetRelation(@NestQuery() options: RelationUnsetParam) {
      return this.__service.unsetRelation(options);
    }
  }

  return Controller;
}
