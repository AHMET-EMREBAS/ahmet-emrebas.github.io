/**
 * Combine Decorators
 * @param decorators PropertyDecorator
 * @returns
 */
export function combineDecorators(
  ...decorators: (PropertyDecorator | undefined)[]
): PropertyDecorator {
  return (target, propertyKey?: any) => {
    (decorators.filter((e) => e) as PropertyDecorator[]).forEach((e) =>
      e(target, propertyKey)
    );
  };
}

/**
 * Combine Decorators
 * @param decorators PropertyDecorator
 * @returns
 */
export function propertyDecorators(
  ...decorators: (PropertyDecorator | undefined)[]
): PropertyDecorator {
  return (target, propertyKey?: any) => {
    (decorators.filter((e) => e) as PropertyDecorator[]).forEach((e) =>
      e(target, propertyKey)
    );
  };
}

export function classDecorators(
  ...decorators: (ClassDecorator | undefined)[]
): ClassDecorator {
  return (target, propertyKey?: any) => {
    (decorators.filter((e) => e) as ClassDecorator[]).forEach((e) => e(target));
  };
}
