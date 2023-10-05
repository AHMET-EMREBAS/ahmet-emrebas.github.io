import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Message, User, Role, Permission } from '@techbir/entities';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Message Module', () => {
  let app: TestingModule;
  let service: MessageService;
  let controller: MessageController;
  let repo: Repository<Message>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ...MockDbWithEntities('message', [Message, User, Role, Permission]),
      ],
      controllers: [MessageController],
      providers: [MessageService],
    }).compile();

    app = await app.init();

    service = app.get(MessageService);
    repo = app.get(getRepositoryToken(Message));
    controller = app.get(MessageController);
  });

  it.each`
    name                           | value
    ${MessageService.name}         | ${MessageService}
    ${MessageController.name}      | ${MessageController}
    ${Message.name + 'Repository'} | ${getRepositoryToken(Message)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
