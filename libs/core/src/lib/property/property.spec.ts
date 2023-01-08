import { validateSync } from 'class-validator';
import { __plainToInstance } from '../shared';
import { Property } from './property';

class A {
  @Property({ type: 'string', minLength: 2, maxLength: 4 })
  stringValue: any;

  @Property({ type: 'integer', minimum: 2, maximum: 4 })
  integerValue: any;

  @Property({ type: 'number', minimum: 2, maximum: 4 })
  floatValue: any;

  @Property({ type: 'string', isEmail: true })
  email: any;

  constructor(obj: Partial<A>) {
    Object.assign(this, obj);
  }
}

describe('Property', () => {
  describe('String Property ', () => {
    it.each([
      { value: 'val', hasError: false },
      { value: '100', hasError: false },
      { value: '', hasError: true },
      { value: 'longlong', hasError: true },
      { value: 100, hasError: true },
    ])('$value should has errors? [$hasError]', async ({ value, hasError }) => {
      const a = new A({ stringValue: value });

      const errors = validateSync(a, {
        skipMissingProperties: true,
        skipNullProperties: true,
        skipUndefinedProperties: true,
      });
      expect(errors.length > 0).toBe(hasError);
    });
  });

  describe('Integer Property ', () => {
    it.each([
      { value: 3, hasError: false },
      { value: '3', hasError: true },
      { value: 1, hasError: true },
      { value: 6, hasError: true },
    ])('$value should has errors? [$hasError]', async ({ value, hasError }) => {
      const a = new A({ integerValue: value });

      const errors = validateSync(a, {
        skipMissingProperties: true,
        skipNullProperties: true,
        skipUndefinedProperties: true,
      });
      expect(errors.length > 0).toBe(hasError);
    });
  });

  describe('Number Property ', () => {
    it.each([
      { value: 3, hasError: false },
      { value: '3', hasError: true },
      { value: 1, hasError: true },
      { value: 6, hasError: true },
    ])('$value should has errors? [$hasError]', async ({ value, hasError }) => {
      const a = new A({ floatValue: value });

      const errors = validateSync(a, {
        skipMissingProperties: true,
        skipNullProperties: true,
        skipUndefinedProperties: true,
      });
      expect(errors.length > 0).toBe(hasError);
    });
  });

  describe('Email Property ', () => {
    it.each([
      { value: 'email@email.com', hasError: false },
      { value: 'email', hasError: true },
    ])('$value should has errors? [$hasError]', async ({ value, hasError }) => {
      const a = new A({ email: value });

      const errors = validateSync(a, {
        skipMissingProperties: true,
        skipNullProperties: true,
        skipUndefinedProperties: true,
      });
      expect(errors.length > 0).toBe(hasError);
    });
  });

  describe('Transformable properties', () => {
    it('IsIntegerTransformer', () => {
      class B {
        @Property({ isStringNumber: true })
        p: number;
      }
      const transformed = __plainToInstance(B, { p: '100' });
      const errors = validateSync(transformed);
      expect(transformed.p).toBe(100);
    });

    it('IsBooleanTransformer', () => {
      class B {
        @Property({ isStringBoolean: true })
        p: number;
      }
      const transformed = __plainToInstance(B, { p: 'true' });
      const errors = validateSync(transformed);
      expect(transformed.p).toBe(true);
    });

    it('IsBooleanTransformer', () => {
      class B {
        @Property({ isStringBoolean: true })
        p: number;
      }
      const transformed = __plainToInstance(B, { p: 'true' });
      const errors = validateSync(transformed);
      expect(transformed.p).toBe(true);
    });

    it('IsDateTransformer', () => {
      class B {
        @Property({ type: 'date', isStringDate: true })
        value: any;
      }
      const d = new Date().toISOString();
      const transformed = __plainToInstance(B, { value: d });

      expect(transformed.value).toBeDefined();
      expect(transformed.value).toBeInstanceOf(Date);

      const errors = validateSync(transformed);
      expect(transformed.value.toISOString()).toBe(d);
    });
  });
});
