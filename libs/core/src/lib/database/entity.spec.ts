import { Test } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Entity, PrimaryGeneratedColumn, Repository } from 'typeorm';
import { Column } from './column';
import { Relation, RelationType } from './relation';

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'text', unique: true })
  name: string;
}

@Entity()
class Sample {
  @PrimaryGeneratedColumn() id?: number;

  @Column({ type: 'text', unique: true })
  name: string;

  @Relation({
    target: Category,
    type: RelationType.ManyToOne,
    join: true,
    eager: true,
  })
  category: Category;
}

describe('Entity Test', () => {
  let sampleRepo: Repository<Sample>;
  let categoryRepo: Repository<Category>;
  let cat: Category;
  let sam: Sample;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'dist/test/sample.sqlite',
          entities: [Sample, Category],
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Sample, Category]),
      ],
    }).compile();

    sampleRepo = moduleRef.get(getRepositoryToken(Sample));
    categoryRepo = moduleRef.get(getRepositoryToken(Category));

    cat = await categoryRepo.save({ name: 'cat' });
    sam = await sampleRepo.save({
      name: 'sam',
      category: { id: 1 },
    });
  });

  it('should create category', async () => {
    const foundSam = await sampleRepo.findOneBy({ id: sam.id });

    expect(cat.id).toBe(1);
    expect(cat.name).toBe('cat');
    expect(foundSam.id).toBe(1);
    expect(foundSam.name).toBe('sam');
    expect(foundSam.category).toBeDefined();
    expect(foundSam.category.id).toBe(1);
    expect(foundSam.category.name).toBe('cat');
  });
});
