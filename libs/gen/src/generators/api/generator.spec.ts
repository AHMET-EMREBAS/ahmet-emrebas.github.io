import { createTreeWithEmptyV1Workspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { ApiGeneratorSchema } from './schema';

describe('api generator', () => {
  let appTree: Tree;
  const options: ApiGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    appTree = createTreeWithEmptyV1Workspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
