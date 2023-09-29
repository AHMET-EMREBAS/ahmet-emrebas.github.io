import { getApiPaths } from './api-paths';

describe('get-apipaths', () => {
  it('get-apipaths', () => {
    const {
      ID_KEY,
      RELATION_ID_KEY,
      RELATION_NAME_KEY,

      SINGULAR_PATH,
      PLURAL_PATH,
      BY_ID_PATH,
      RELATION_NAME_PATH,
      RELATION_NAME_AND_ID_PATH,
    } = getApiPaths('category');

    expect(ID_KEY).toBe('id');
    expect(RELATION_ID_KEY).toBe('relationId');
    expect(RELATION_NAME_KEY).toBe('relationName');
    expect(SINGULAR_PATH).toBe('category');
    expect(PLURAL_PATH).toBe('categories');
    expect(BY_ID_PATH).toBe('category/:id');
    expect(RELATION_NAME_PATH).toBe('category/:id/:relationName');
    expect(RELATION_NAME_AND_ID_PATH).toBe(
      'category/:id/:relationName/:relationId'
    );

    
  });
});
