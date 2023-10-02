/**
 * Mathcer is an alternative way to if-else statement
 * There are two types of matcher value and null matcher.
 * You can swich between matchers using switch methods .
 *
 * To create a matcher for a value, use static init method then use one of the switch method to match values.
 *
 * 1. match value
 * match value checks the equality of the values, if the value is equal then the result will be stored in output array.
 * then after you matches done, you can get the result by using getFirst or getAll method.
 *
 *
 * 2. match not null
 * if the value is not null, then the handler added to the output
 *
 * ....
 */
export class Matcher<T, R> {
  private value?: unknown;

  private output: (() => R)[] = [];

  private push<VT, VR>(value: VT, returnValue: (value: VT) => VR) {
    (this as unknown as Matcher<VT, VR>).output.push(() => returnValue(value));
  }

  /**
   * Start matching
   */
  static init(): Pick<
    Matcher<unknown, unknown>,
    'switchMatchValue' | 'switchNotNull'
  > {
    const instance = new Matcher();
    return instance;
  }

  /**
   * Switch to value mode
   * @param value value that will be compared with the actual value
   * @returns Matcher
   */
  switchMatchValue<VT, VR>(
    value: VT
  ): Omit<
    Matcher<VT, VR>,
    | 'matchNotNull'
    | 'switchMatchValue'
    | 'switchNotNull'
    | 'getAll'
    | 'getFirst'
  > {
    this.value = value;
    return this as unknown as Matcher<VT, VR>;
  }

  /**
   * Switch the not null mode
   * @returns Matcher
   */
  switchNotNull<VT, VR>(): Omit<
    Matcher<VT, VR>,
    'matchValue' | 'switchMatchValue' | 'switchNotNull' | 'getAll' | 'getFirst'
  > {
    this.value = undefined;
    return this as unknown as Matcher<VT, VR>;
  }

  /**
   * Check the value is equal to actual value.
   * @param value
   * @param returnValue a function that return the desired value
   * @returns
   */
  matchValue<VT extends T>(
    value: VT,
    returnValue: (value: VT) => R
  ): Omit<Matcher<Exclude<T, VT>, R>, 'matchNotNull'> {
    if (value !== undefined && this.value !== undefined) {
      if (value === this.value) {
        this.push<VT, R>(value, returnValue);
      }
    }
    return this as unknown as Exclude<
      Matcher<Exclude<T, VT>, R>,
      'matchNotNull'
    >;
  }

  /**
   * Check value is not null
   * @param value
   * @param returnValue
   * @returns
   */
  matchNotNull<P = T>(
    value: P | undefined,
    returnValue: (value: NonNullable<P>) => R
  ): Exclude<Matcher<P, R>, 'matchValue' | 'switchMatchNotNull'> {
    if (value != undefined) {
      this.output.push(() => returnValue(value));
    }
    return this;
  }

  /**
   * Get the first match
   * @returns 
   */
  getFirst(): R | undefined {
    if (this.output.length > 0) {
      return this.output[0]();
    }
    return undefined;
  }

  /**
   * Get all matches.
   * @returns 
   */
  getAll(): R[] | undefined {
    if (this.output.length > 0) {
      return this.output.map((e) => e());
    }
    return undefined;
  }
}
