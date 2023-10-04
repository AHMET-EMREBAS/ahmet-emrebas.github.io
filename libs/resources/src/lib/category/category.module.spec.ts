import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Category } from '@techbir/entities';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Category Module', () => {
  let app: TestingModule;
  let service: CategoryService;
  let controller: CategoryController;
  let repo: Repository<Category>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('category', [Category])],
      controllers: [CategoryController],
      providers: [CategoryService],
    }).compile();

    app = await app.init();

    service = app.get(CategoryService);
    repo = app.get(getRepositoryToken(Category));
    controller = app.get(CategoryController);
  });

  it.each`
    name                            | value
    ${CategoryService.name}         | ${CategoryService}
    ${CategoryController.name}      | ${CategoryController}
    ${Category.name + 'Repository'} | ${getRepositoryToken(Category)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
