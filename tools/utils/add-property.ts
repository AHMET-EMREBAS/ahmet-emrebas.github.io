#!/usr/bin/env ts-node

import assert from 'assert';
import { describe, test } from './test';

export function addProperty(object: any, value: any, ...paths: string[]) {
  const p = paths[0];

  if (paths.length === 0) {
    return;
  }

  if (paths.length === 1) {
    object[p] = value;
    return;
  }

  if (!object[p]) {
    object[p] = {};
  }

  addProperty(object[p], value, ...paths.slice(1));
}

describe('Add Property', () => {
  test('Should add child', () => {
    const obj: any = { first: 1 };
    addProperty(obj, 2, 'value');
    assert.equal(obj.value, 2);
  });

  test('Should add grandchild', () => {
    const obj: any = { first: 1 };
    addProperty(obj, 2, 'value', 'value');
    assert.equal(obj.value.value, 2);
  });
});
