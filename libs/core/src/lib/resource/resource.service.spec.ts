import { Test, TestingModule } from '@nestjs/testing';
import { Column, Dto, Entity } from '../entities';
import { Property, Relation } from '../property';
import { NumberProperty, UniqueNameProperty } from '@techbir/common';
import { PartialType } from '@nestjs/swagger';
import { ResourceService } from './resource.service';
import { InjectRepository, getRepositoryToken } from '@nestjs/typeorm';
import { PrimaryGeneratedColumn, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { MockDbWithEntities } from '../helpers/mockdb';

const nameProperty = UniqueNameProperty();
const ageProperty: NumberProperty = {
  name: 'age',
  type: 'number',
  minimum: 16,
};

@Entity()
class Category {
  @PrimaryGeneratedColumn() id?: number;
  @Column(nameProperty) name?: string;
}

@Entity()
class Sample {
  @PrimaryGeneratedColumn() id?: number;
  @Column(nameProperty) name?: string;
  @Column(ageProperty) age?: number;

  @Relation({
    type: 'ManyToOne',
    target: 'Category',
    name: 'category',
    eager: true,
    join: true,
  })
  category?: Category;
}

@Dto()
class CreateSampleDto {
  @Property(nameProperty) name?: string;
  @Property(ageProperty) age?: number;
}

class UpdateSampleDto extends PartialType(CreateSampleDto) {}

@Injectable()
class SampleService extends ResourceService<Sample> {
  constructor(@InjectRepository(Sample) repo: Repository<Sample>) {
    super(repo, ['name']);
  }
}

describe('Resource Service', () => {
  let app: TestingModule;
  let service: SampleService;
  let repo: Repository<Sample>;
  let categoryRepo: Repository<Category>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('resource-service', [Sample, Category])],
      providers: [SampleService],
    }).compile();

    app = await app.init();
    service = app.get(SampleService);
    repo = app.get(getRepositoryToken(Sample));
    categoryRepo = app.get(getRepositoryToken(Category));
  });

  it.each`
    name                            | value
    ${SampleService.name}           | ${SampleService}
    ${Sample.name + 'Repository'}   | ${getRepositoryToken(Sample)}
    ${Category.name + 'Repository'} | ${getRepositoryToken(Category)}
  `('$name', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });

  it('should create app', () => {
    expect(app).toBeDefined();
  });

  describe('Create Entity', () => {
    it('should create sample entity', async () => {
      const response = await service.save({ name: 'name', age: 50 });

      expect(response.name).toBe('name');
      expect(response.age).toBe(50);
    });
  });

  describe('Update entity', () => {
    let saved: Sample;

    beforeAll(async () => {
      saved = await service.save({ name: 'entity to be updated', age: 18 });
    });

    it('should udpate entity name', async () => {
      const updated = await service.update(saved.id!, {
        name: 'updated name',
      });
      expect(updated.name).toBe('updated name');
    });

    it('should update entity age', async () => {
      const updated = await service.update(saved.id!, {
        age: 400,
      });
      expect(updated.age).toBe(400);
    });
  });

  describe('Delete entity', () => {
    let saved: Sample;
    beforeAll(async () => {
      saved = await service.save({ name: 'entity to be updated', age: 18 });
    });

    it('should delete entity by id', async () => {
      expect(saved).toBeDefined();

      expect(await service.findOneById(saved.id!)).toBeDefined();

      const deleted = await service.delete(saved.id!);

      expect(deleted.id).toBe(saved.id);

      const deleteEntity = async () => {
        return await service.findOneById(saved.id!);
      };

      expect(deleteEntity).rejects.toThrow();
    });
  });
});
