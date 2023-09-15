#!/usr/bin/env ts-node

/**
 *
 * @author Ahmet Emrebas
 * @website
 *
 * MIT License
 *
 * Copyright (c) 2023 Ahmet Emrebas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 *
 * @description publish packages to npm registry
 *
 */

import { exec } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';
import { delay, input, createLogger, getDirsOnly } from '../utils';

const { log, error } = createLogger('publish-packages');

function execHandler(err: any, stdout: any, stderr: any) {
  err && error(err + '\n');
  stderr && error(stderr + '\n');
  stdout && log(stdout + '\n');
}

const PACKAGE_JSON_FILE = join(process.cwd(), 'package.json');

const LIBRARIES_ROOT = join(process.cwd(), 'libs');

function inputs() {
  const __pakcageJsonFile = readFileSync(PACKAGE_JSON_FILE).toString();
  const packageJSON = JSON.parse(__pakcageJsonFile);

  const VER = input(1, packageJSON.version);
  const TAG = input(2, 'next');

  return [VER, TAG];
}

let timer = 0;
function publishLibrary(lib: string) {
  delay(timer++ * 10000, () => {
    log(`publishing ${lib}`);
    const command = `npx nx publish ${lib} --ver=${VER} --tag=${TAG}`;
    exec(command, execHandler);
  });
}

const [VER, TAG] = inputs();

log(`----------${new Date().toLocaleString()}----------`);
log(`VERSION : ${VER}`);
log(`TAG     : ${TAG}`);
log('.'.repeat(30));

getDirsOnly(LIBRARIES_ROOT).forEach(publishLibrary);
