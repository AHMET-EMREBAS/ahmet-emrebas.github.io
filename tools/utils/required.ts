#!/usr/bin/env ts-node

import assert from 'assert';
import { describe, test } from './test';

export function required(value: any, context: string = 'Value') {
  if (value === undefined) {
    throw new Error(context + ' is required');
  }
  return value;
}

describe('Required', () => {
  test('should throw error if value is undefined', () => {
    assert.throws(() => required(undefined, 'test'));
  });

  test('should return value if value is not undefiend', () => {
    assert.equal(required('value'), 'value');
  });
});
