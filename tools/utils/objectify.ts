#!/usr/bin/env ts-node
import assert from 'assert';
import { describe, test } from './test';

export function objectify(value: Record<string, any>[], key: string) {
  return value
    .map((v) => {
      const keyValue = v[key];
      delete v[key];
      return { [keyValue]: v };
    })
    .reduce((p, c) => ({ ...p, ...c }));
}

describe('Object Array to Object', () => {
  test('should parse array object to object', () => {
    const objectList = [
      { name: 'name1', order: 1 },
      { name: 'name2', order: 5 },
    ];
    const result = objectify(objectList, 'name');
    assert.deepEqual(result, { name1: { order: 1 }, name2: { order: 5 } });
  });
});

describe('Test Description', () => {
  test('test case description', () => {
    // Add your test
  });
});
