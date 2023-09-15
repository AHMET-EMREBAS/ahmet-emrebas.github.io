#!/usr/bin/env ts-node

import { join } from 'path';
import { cwd } from 'process';
import { input, required, objectify, readJson, writeJson } from '../utils';
import { localeList } from './locale-list';
import { readFileSync, writeFileSync } from 'fs';


const OPENAI_API_KEY = process.env['OPENAI_API_KEY'];

const PROJECT_NAME = required(input(1), 'Project name');

const WORKING_DIR = join(cwd(), `apps/${PROJECT_NAME}`);

const LOCALE_ROOT = join(WORKING_DIR, 'src', 'locale');

const MAIN_LOCALE_FILE_PATH = join(LOCALE_ROOT, 'messages.xlf');

const PROJECT_CONFIG_PATH = join(WORKING_DIR, 'project.json');

const projectConfig = readJson(PROJECT_CONFIG_PATH);

function localeFileName(code: string) {
  return `messages.${code}.xlf`;
}
function translation(appName: string, code: string) {
  return `apps/${appName}/src/locale/${localeFileName(code)}`;
}

const localeConfigurationArray = () =>
  localeList().map(({ name, code }) => {
    return { name, code, translation: translation(PROJECT_NAME, code) };
  });

const localeConfigurationObject = objectify(localeConfigurationArray(), 'code');

projectConfig['i18n']['locales'] = localeConfigurationObject;

writeJson(PROJECT_CONFIG_PATH, projectConfig);

const mainLocaleFileContent = readFileSync(MAIN_LOCALE_FILE_PATH);

for (const { code, name, translation } of localeConfigurationArray()) {
  const filePath = join(LOCALE_ROOT, localeFileName(code));
  writeFileSync(filePath, mainLocaleFileContent);
}
