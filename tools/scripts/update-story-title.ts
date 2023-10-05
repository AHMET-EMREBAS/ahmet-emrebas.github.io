#!/usr/bin/env ts-node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

const PLACEHOLDER = '<title>@storybook/angular - Storybook</title>';
const INDEX_FILEPATH = join(cwd(), 'docs', 'index.html');

const indexHtml = readFileSync(INDEX_FILEPATH).toString();

const newIndexHtml = indexHtml.replace(PLACEHOLDER, '');

writeFileSync(INDEX_FILEPATH, newIndexHtml);
