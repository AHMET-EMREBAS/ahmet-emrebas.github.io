import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { PriceLevel } from '@techbir/entities';
import { PriceLevelController } from './price-level.controller';
import { PriceLevelService } from './price-level.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('PriceLevel Module', () => {
  let app: TestingModule;
  let service: PriceLevelService;
  let controller: PriceLevelController;
  let repo: Repository<PriceLevel>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('priceLevel', [PriceLevel])],
      controllers: [PriceLevelController],
      providers: [PriceLevelService],
    }).compile();

    app = await app.init();

    service = app.get(PriceLevelService);
    repo = app.get(getRepositoryToken(PriceLevel));
    controller = app.get(PriceLevelController);
  });

  it.each`
    name                              | value
    ${PriceLevelService.name}         | ${PriceLevelService}
    ${PriceLevelController.name}      | ${PriceLevelController}
    ${PriceLevel.name + 'Repository'} | ${getRepositoryToken(PriceLevel)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
