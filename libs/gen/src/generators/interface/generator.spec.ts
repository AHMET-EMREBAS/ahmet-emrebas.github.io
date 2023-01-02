import { readProjectConfiguration, Tree } from '@nrwl/devkit';
import { createTreeWithEmptyV1Workspace } from '@nrwl/devkit/testing';

import generator from './generator';
import { InterfaceGeneratorSchema } from './schema';

describe('interface generator', () => {
  let appTree: Tree;
  const options: InterfaceGeneratorSchema = { name: 'test', project: '' };

  beforeEach(() => {
    appTree = createTreeWithEmptyV1Workspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
