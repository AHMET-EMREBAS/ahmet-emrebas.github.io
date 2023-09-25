#!/usr/bin/env ts-node
/**
 * Add .template extention to all files under the provided directory.
 */
import { cwd } from 'process';
import { forEachFile, input, isIn, required } from '../utils';
import { readdirSync, renameSync } from 'fs';
import { join } from 'path';

const generatorName = required(input(1), 'Project name');

const WORKING_DIR = join(cwd(), 'libs/gen/src/generators');

const generatorsList = readdirSync(WORKING_DIR);

required(isIn(generatorName, generatorsList), 'Generator');

const generatorPath = join(WORKING_DIR, generatorName, 'files');

const templateFiles = readdirSync(generatorPath);

console.log(templateFiles);

forEachFile(generatorPath, (filePath) => {
  console.log(filePath);
  if (!filePath.endsWith('.template')) {
    renameSync(filePath, filePath + '.template');
  }
});
