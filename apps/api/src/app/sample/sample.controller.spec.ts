import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';

describe(SampleController.name, () => {
  let sampleService: SampleService;
  let sampleController: SampleController;

  beforeEach(() => {
    sampleService = new SampleService({} as any, {} as any);
    sampleController = new SampleController(sampleService);
  });
  it('should find', async () => {
    const result = [];
    jest.spyOn(sampleService, 'find').mockImplementation(async () => result);
    expect(await sampleController.find()).toBe(result);
  });
  it('should save', async () => {
    const result = [];
    jest
      .spyOn(sampleService, 'save')
      .mockImplementation(async () => result as any);
    expect(await sampleController.save({} as any)).toBe(result);
  });

  it('should update', async () => {
    const result = [];
    jest
      .spyOn(sampleService, 'update')
      .mockImplementation(async () => result as any);
    expect(await sampleController.update(-1, {} as any)).toBe(result);
  });

  it('should delete', async () => {
    const result = [];
    jest
      .spyOn(sampleService, 'delete')
      .mockImplementation(async () => result as any);
    expect(await sampleController.delete(-1)).toBe(result);
  });
});
