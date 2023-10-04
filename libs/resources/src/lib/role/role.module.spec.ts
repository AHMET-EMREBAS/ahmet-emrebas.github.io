import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Role, Permission } from '@techbir/entities';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Role Module', () => {
  let app: TestingModule;
  let service: RoleService;
  let controller: RoleController;
  let repo: Repository<Role>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('role', [Role, Permission])],
      controllers: [RoleController],
      providers: [RoleService],
    }).compile();

    app = await app.init();

    service = app.get(RoleService);
    repo = app.get(getRepositoryToken(Role));
    controller = app.get(RoleController);
  });

  it.each`
    name                        | value
    ${RoleService.name}         | ${RoleService}
    ${RoleController.name}      | ${RoleController}
    ${Role.name + 'Repository'} | ${getRepositoryToken(Role)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
