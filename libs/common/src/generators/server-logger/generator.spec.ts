import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { serverLoggerGenerator } from './generator';
import { ServerLoggerGeneratorSchema } from './schema';

describe('server-logger generator', () => {
  let tree: Tree;
  const options: ServerLoggerGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await serverLoggerGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
