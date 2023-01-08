import { __plainToInstance } from '../shared';
import { BodyIdDto, ParamIdDto } from './id.dto';

describe('IdDto', () => {
  describe('ParamIdDto', () => {
    it('should transform', async () => {
      const obj = { id: '1', some: 'some' };

      const transformed = __plainToInstance(ParamIdDto, obj);

      expect(transformed['id']).toBe(1);
      expect(transformed['some']).toBe(undefined);
    });
  });

  describe('BodyIdDto', () => {
    it('should transform', async () => {
      const obj = { id: 1, some: 'some' };
      const transformed = __plainToInstance(BodyIdDto, obj);

      expect(transformed['id']).toBe(1);
      expect(transformed['some']).toBe(undefined);
    });
  });
});
