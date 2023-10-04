import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Permission } from '@techbir/entities';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Permission Module', () => {
  let app: TestingModule;
  let service: PermissionService;
  let controller: PermissionController;
  let repo: Repository<Permission>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('permission', [Permission])],
      controllers: [PermissionController],
      providers: [PermissionService],
    }).compile();

    app = await app.init();

    service = app.get(PermissionService);
    repo = app.get(getRepositoryToken(Permission));
    controller = app.get(PermissionController);
  });

  it.each`
    name                              | value
    ${PermissionService.name}         | ${PermissionService}
    ${PermissionController.name}      | ${PermissionController}
    ${Permission.name + 'Repository'} | ${getRepositoryToken(Permission)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
