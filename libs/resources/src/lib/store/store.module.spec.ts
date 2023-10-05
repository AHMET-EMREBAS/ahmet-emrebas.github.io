import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Store, PriceLevel } from '@techbir/entities';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Store Module', () => {
  let app: TestingModule;
  let service: StoreService;
  let controller: StoreController;
  let repo: Repository<Store>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('store', [Store, PriceLevel])],
      controllers: [StoreController],
      providers: [StoreService],
    }).compile();

    app = await app.init();

    service = app.get(StoreService);
    repo = app.get(getRepositoryToken(Store));
    controller = app.get(StoreController);
  });

  it.each`
    name                         | value
    ${StoreService.name}         | ${StoreService}
    ${StoreController.name}      | ${StoreController}
    ${Store.name + 'Repository'} | ${getRepositoryToken(Store)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
