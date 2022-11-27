import { readFileSync } from 'fs';
import { join, parse } from 'path';
import { parseYamlObject } from './parse-yaml';
import { load } from 'js-yaml';

describe('Parse yaml', () => {
  it('should parse', () => {
    const file = readFileSync(join(__dirname, 'test.yaml')).toString();
    let yamlObj: any = load(file);

    expect(yamlObj.a.$ref).toBe('#/b');
    expect(yamlObj.c.$ref).toBe('#/a');
    expect(yamlObj.b.name).toBe('b');

    if (yamlObj) {
      yamlObj = parseYamlObject(yamlObj);

      console.log(yamlObj);
      expect(yamlObj).toBeTruthy();

      expect(yamlObj['a']['name']).toBe('b');
      expect(yamlObj['b']['name']).toBe('b');
      expect(yamlObj['c']['name']).toBe('b');
    }
  });
});
