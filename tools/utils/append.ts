#!/usr/bin/env ts-node

import { describe, test } from './test';
import assert from 'assert';

export function append(
  content: string,
  apendix: string,
  where: string
): string {
  const hasIndex = content.indexOf(where);
  const afterTextLength = where.length;

  if (hasIndex > 0) {
    const startIndex = content.indexOf(where) + afterTextLength;
    return (
      content.substring(0, startIndex) +
      apendix +
      append(content.substring(startIndex), apendix, where)
    );
  } else {
    return content;
  }
}

function prepend(content: string, prependix: string, where: string): string {
  const hasIndex = content.indexOf(where);
  const afterTextLength = where.length;

  if (hasIndex > 0) {
    const startIndex = content.indexOf(where);
    return (
      content.substring(0, startIndex) +
      prependix +
      where +
      prepend(content.substring(startIndex + afterTextLength), prependix, where)
    );
  } else {
    return content;
  }
}

describe('Apend', () => {
  test('should append', () => {
    const updated = append('x100500100600100y', '200', '100');
    assert.equal(updated, 'x100200500100200600100200y');
  });

  test('should append xml', () => {
    const updated = append(
      `<xml><source>some</source><source>other</source></xml>`,
      '<target>Target</target>',
      '</source>'
    );

    assert.equal(
      updated,
      `<xml><source>some</source><target>Target</target><source>other</source><target>Target</target></xml>`
    );
  });

  test('should prepend', () => {
    const updated = prepend('x100500100600100y', '200', '100');
    assert.equal(updated, 'x200100500200100600200100y');
  });
});
