import { Expose } from 'class-transformer';
import { __plainToInstance } from '../shared';
import {
  StringBooleanTransformer,
  StringDateTransformer,
  StringIntegerTransformer,
  StringNumberTransformer,
} from './transformer';

describe('Transformer', () => {
  describe('StringIntegerTransformer', () => {
    it('should transform string to integer', () => {
      class A {
        @StringIntegerTransformer(-1)
        @Expose()
        num: number;
      }

      const test1 = __plainToInstance(A, { num: '1' });
      expect(test1.num).toBe(1);

      const test2 = __plainToInstance(A, {});
      expect(test2.num).toBe(-1);
    });
  });

  describe('StringNumberTransformer', () => {
    it('should transform', () => {
      class A {
        @StringNumberTransformer(-1)
        @Expose()
        num: number;
      }

      const test1 = __plainToInstance(A, { num: '1.50' });
      expect(test1.num).toBe(1.5);

      const test2 = __plainToInstance(A, {});
      expect(test2.num).toBe(-1);
    });
  });

  describe('StringBooleanTransformer', () => {
    it('should transform', () => {
      class A {
        @StringBooleanTransformer(false)
        @Expose()
        num: boolean;
      }

      const test1 = __plainToInstance(A, { num: 'true' });
      expect(test1.num).toBe(true);

      const test2 = __plainToInstance(A, {});
      expect(test2.num).toBe(false);
    });
  });

  describe('StringDateTransformer', () => {
    it('should transform', () => {
      class A {
        @StringDateTransformer()
        @Expose()
        num: Date;
      }

      const test1 = __plainToInstance(A, {
        num: new Date('10-10-2022').toISOString(),
      });
      expect((test1.num as Date).toISOString()).toBe(
        new Date('10-10-2022').toISOString()
      );
    });
  });
});
