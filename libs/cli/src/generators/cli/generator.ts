import { formatFiles, names, offsetFromRoot, Tree } from '@nrwl/devkit';
import { CliGeneratorSchema } from './schema';

interface NormalizedSchema extends CliGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
}

export default async function (tree: Tree, options: CliGeneratorSchema) {
  // generateFiles(tree, path.join(__dirname, 'files'));
  await formatFiles(tree);
}
