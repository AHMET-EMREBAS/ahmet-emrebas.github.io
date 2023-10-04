import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { User, Role, Permission } from '@techbir/entities';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('User Module', () => {
  let app: TestingModule;
  let service: UserService;
  let controller: UserController;
  let repo: Repository<User>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('user', [User, Role, Permission])],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    app = await app.init();

    service = app.get(UserService);
    repo = app.get(getRepositoryToken(User));
    controller = app.get(UserController);
  });

  it.each`
    name                        | value
    ${UserService.name}         | ${UserService}
    ${UserController.name}      | ${UserController}
    ${User.name + 'Repository'} | ${getRepositoryToken(User)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
