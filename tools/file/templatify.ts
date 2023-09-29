#!/usr/bin/env ts-node
/**
 * Add .template extention to all files under the provided directory.
 */
import { cwd } from 'process';
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'fs';
import { join } from 'path';
import { names } from '@nx/devkit';
import { forEachFile } from '../utils/for-each-file';

const NAMES = names('product');

const WORKING_DIR = join(cwd(), 'templates', NAMES.fileName);
const TARGET_DIR = join(cwd(), 'templates', '__fileName__');

const dirs = readdirSync(WORKING_DIR);

forEachFile(WORKING_DIR, (filePath: string) => {
  const fileContent = readFileSync(filePath).toString();
  const newContent = fileContent
    .replace(/Product/g, '<%- className %>')
    .replace(/product/g, '<%- fileName %>')
    .replace(/PRODUCT/g, '<%- constantName %>')

  const newTargetDir = filePath.replace(/product/g, '__fileName__') + '.template';

  writeFileSync(newTargetDir, newContent);
});
