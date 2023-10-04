import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Price, Product, Category, PriceLevel } from '@techbir/entities';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Price Module', () => {
  let app: TestingModule;
  let service: PriceService;
  let controller: PriceController;
  let repo: Repository<Price>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ...MockDbWithEntities('price', [Price, Product, Category, PriceLevel]),
      ],
      controllers: [PriceController],
      providers: [PriceService],
    }).compile();

    app = await app.init();

    service = app.get(PriceService);
    repo = app.get(getRepositoryToken(Price));
    controller = app.get(PriceController);
  });

  it.each`
    name                         | value
    ${PriceService.name}         | ${PriceService}
    ${PriceController.name}      | ${PriceController}
    ${Price.name + 'Repository'} | ${getRepositoryToken(Price)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
