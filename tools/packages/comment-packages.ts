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
 * @description generate this license comment for ts/js files under dist folder.
 * @important use this tool for only dist folders!!!!
 */

import { readFile, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { createLogger, forEachFile } from '../utils';

const { log, error } = createLogger('comment-packages');

/**
 * @param author
 * @param website
 * @returns
 */
function fileComment(author: string, website: string) {
  return `
  
/**
 * 
 * @author ${author}
 * @website ${website}
 * 
 * MIT License
 *
 * Copyright (c) ${new Date()} ${author}
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
 */
  
  `.trim();
}

log('Stared');
const DIST_ROOT = join(__dirname, '../../dist/libs');

const libraryDirs = readdirSync(DIST_ROOT);

const comment = fileComment('Ahmet Emrebas', 'https://ahmet-emrebas.github.io');

forEachFile(DIST_ROOT, (file: string) => {
  if (file.endsWith('.js') || file.endsWith('.ts'))
    readFile(file, {}, (err, data) => {
      err && error(err.message);

      const newFileContent = comment + '\n' + data.toString();

      log('Writing comments' + file);
      writeFileSync(file, newFileContent);
    });
});
