#!/usr/bin/env ts-node
/**
 * Generate locales from source locale and update targets.
 */
import { join } from 'path';
import { cwd } from 'process';
import {
  input,
  required,
  objectify,
  readJson,
  writeJson,
  concat,
  addProperty,
} from '../utils';
import { localeList } from './locale-list';
import { readFileSync, writeFileSync } from 'fs';
import { splitGet } from '../utils/split-get';

const OPENAI_API_KEY = process.env['OPENAI_API_KEY'];

const PROJECT_NAME = required(input(1), 'Project name');

const WORKING_DIR = join(cwd(), `apps/${PROJECT_NAME}`);

const LOCALE_ROOT = join(WORKING_DIR, 'src', 'locale');

const MAIN_LOCALE_FILE_PATH = join(LOCALE_ROOT, 'messages.xlf');

const PROJECT_CONFIG_PATH = join(WORKING_DIR, 'project.json');

const projectConfig = readJson(PROJECT_CONFIG_PATH);

function localeFileName(code: string) {
  return concat('.', 'messages', code, 'xlf');
}
function translationFilePath(appName: string, code: string) {
  return `apps/${appName}/src/locale/${localeFileName(code)}`;
}

const localeConfigurationArray = () => {
  const list = localeList().map(({ name, code }) => {
    return { name, code, translation: translationFilePath(PROJECT_NAME, code) };
  });
  list.unshift({
    name: 'Default',
    code: '',
    translation: translationFilePath(PROJECT_NAME, ''),
  });

  return list;
};

function preparedLocaleConfigurationArrayForFile() {
  const list = localeConfigurationArray().map((e) => {
    return { ...e, code: splitGet(e.code, '_') };
  });
  const result = objectify(list, 'code');
  return result;
}

addProperty(
  projectConfig,
  preparedLocaleConfigurationArrayForFile(),
  'i18n',
  'locales'
);

writeJson(PROJECT_CONFIG_PATH, projectConfig);

const mainLocaleFileContent = readFileSync(MAIN_LOCALE_FILE_PATH);

for (const { code, name, translation } of localeConfigurationArray()) {
  const filePath = join(LOCALE_ROOT, localeFileName(code));
  writeFileSync(filePath, mainLocaleFileContent);
}
