import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Group } from '@techbir/entities';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Group Module', () => {
  let app: TestingModule;
  let service: GroupService;
  let controller: GroupController;
  let repo: Repository<Group>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('group', [Group])],
      controllers: [GroupController],
      providers: [GroupService],
    }).compile();

    app = await app.init();

    service = app.get(GroupService);
    repo = app.get(getRepositoryToken(Group));
    controller = app.get(GroupController);
  });

  it.each`
    name                         | value
    ${GroupService.name}         | ${GroupService}
    ${GroupController.name}      | ${GroupController}
    ${Group.name + 'Repository'} | ${getRepositoryToken(Group)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
