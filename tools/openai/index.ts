#!/usr/bin/env ts-node
import { writeFileSync } from 'fs';
import OpenAI from 'openai';
import { join } from 'path';
import { format } from 'prettier';
import { cwd } from 'process';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MODEL = 'gpt-3.5-turbo';

async function completions(content: string) {
  return await openai.chat.completions.create({
    messages: [{ role: 'user', content }],
    model: MODEL,
  });
}

function translateMessage(list: string[], locales: string[]) {
  return `Translate this list into ${locales.join(',')} languages [${list.join(
    ','
  )}]. Result should be json object`;
}

export async function translate(list: string[], locales: string[]) {
  const result = await completions(translateMessage(list, locales));
  const content = result.choices[0].message.content;
  const parsedContent = JSON.parse(content || '{}');
  result.choices[0].message.content = parsedContent;

  const formatted = format(JSON.stringify(result), { parser: 'json' });
  writeFileSync(join(cwd(), 'tmp', 'openai', `${new Date()} locale.json`), formatted);
  return parsedContent;
}
