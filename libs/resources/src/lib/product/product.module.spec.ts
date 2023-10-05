import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Product, Category } from '@techbir/entities';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Product Module', () => {
  let app: TestingModule;
  let service: ProductService;
  let controller: ProductController;
  let repo: Repository<Product>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('product', [Product, Category])],
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    app = await app.init();

    service = app.get(ProductService);
    repo = app.get(getRepositoryToken(Product));
    controller = app.get(ProductController);
  });

  it.each`
    name                           | value
    ${ProductService.name}         | ${ProductService}
    ${ProductController.name}      | ${ProductController}
    ${Product.name + 'Repository'} | ${getRepositoryToken(Product)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
