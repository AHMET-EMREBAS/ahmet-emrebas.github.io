import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleView } from './sample-view.entity';
import { Sample } from './sample.entity';

describe(Sample.name, () => {
  let mainRepo: Repository<Sample>;
  let viewRepo: Repository<SampleView>;
  let app: INestApplication;
  let dummy: Sample;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'dist/test/sample.sqlite',
          entities: [Sample, SampleView],
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Sample, SampleView]),
      ],
    }).compile();

    app = moduleRef.createNestApplication();

    mainRepo = moduleRef.get(getRepositoryToken(Sample));
    viewRepo = moduleRef.get(getRepositoryToken(SampleView));

    dummy = await mainRepo.save({ name: 'dummary' });
    await app.init();
  });

  it('should be defiend', async () => {
    expect(mainRepo).toBeDefined();
    expect(viewRepo).toBeDefined();
  });

  it('should create', async () => {
    const created = await mainRepo.save({ name: 'name' });
    expect(created.id).toBeGreaterThan(0);
    expect(created.name).toBe('name');
  });

  it('should find', async () => {
    const found = await mainRepo.find();
    const found2 = await viewRepo.find();
    expect(found.length).toBeGreaterThan(0);
    expect(found2.length).toBeGreaterThan(0);
  });

  it('should find by id', async () => {
    const found = await mainRepo.findOneBy({ id: dummy.id });
    const found2 = await viewRepo.findOneBy({ id: dummy.id });
    expect(found.id).toBe(dummy.id);
    expect(found2.id).toBe(dummy.id);
  });

  it('should update', async () => {
    const updated = await mainRepo.update(dummy.id, { name: 'updated dummy' });
    const found = await viewRepo.findOneBy({ id: dummy.id });
    expect(found.name).toBe('updated dummy');
  });
});
