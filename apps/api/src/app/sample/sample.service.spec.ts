import { Repository } from 'typeorm';
import { SampleService } from './sample.service';

describe(SampleService.name, () => {
  let repo: Repository<any>;
  let service: SampleService;

  beforeEach(() => {
    repo = new Repository(null, null, null);
    service = new SampleService(repo, repo);
  });

  it('should find', async () => {
    const result = [];
    jest.spyOn(repo, 'find').mockImplementation(async () => result as any);
    expect(await service.find()).toBe(result);
  });

  it('should findById', async () => {
    const result = [];
    jest.spyOn(repo, 'findOneBy').mockImplementation(async () => result as any);
    expect(await service.findById(-1)).toBe(result);
  });

  it('should save', async () => {
    const result = [];
    jest.spyOn(repo, 'save').mockImplementation(async () => result as any);
    expect(await service.save({} as any)).toBe(result);
  });
  it('should update', async () => {
    const result = [];
    jest.spyOn(repo, 'update').mockImplementation(async () => result as any);
    expect(await service.update(-1, {} as any)).toBe(result);
  });

  it('should delete', async () => {
    const result = [];
    jest.spyOn(repo, 'delete').mockImplementation(async () => result as any);
    expect(await service.delete(-1)).toBe(result);
  });
});
