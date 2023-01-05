import { readProjectConfiguration, Tree } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';

import generator from './generator';
import { RestModuleGeneratorSchema } from './schema';

describe('rest-module generator', () => {
  let appTree: Tree;
  const options: RestModuleGeneratorSchema = {
    project: 'test1',
    model: 'test2',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
