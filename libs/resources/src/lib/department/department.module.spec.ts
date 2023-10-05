import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Department } from '@techbir/entities';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Department Module', () => {
  let app: TestingModule;
  let service: DepartmentService;
  let controller: DepartmentController;
  let repo: Repository<Department>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('department', [Department])],
      controllers: [DepartmentController],
      providers: [DepartmentService],
    }).compile();

    app = await app.init();

    service = app.get(DepartmentService);
    repo = app.get(getRepositoryToken(Department));
    controller = app.get(DepartmentController);
  });

  it.each`
    name                              | value
    ${DepartmentService.name}         | ${DepartmentService}
    ${DepartmentController.name}      | ${DepartmentController}
    ${Department.name + 'Repository'} | ${getRepositoryToken(Department)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
