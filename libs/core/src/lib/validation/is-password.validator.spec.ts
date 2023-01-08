import { validateSync } from 'class-validator';
import { IsPassword } from './is-password.validator';

class A {
  @IsPassword()
  password: string;
}

describe('IsPasswordValidator', () => {
  it.each([
    { pass: '!Aa123515', hasError: false },
    { pass: '!Aa', hasError: true },
    { pass: 'Aa123515', hasError: true },
    { pass: '!a123515', hasError: true },
  ])('$pass return errors? [$hasError] ', ({ pass, hasError }) => {
    const c = new A();
    c.password = pass;
    const errors = validateSync(c);
    expect(errors.length > 0).toBe(hasError);
  });
});
