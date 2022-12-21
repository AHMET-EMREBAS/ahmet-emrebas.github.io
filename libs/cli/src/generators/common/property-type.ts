export function propertyType(
  t: 'String' | 'Number' | 'Integer' | 'Date' | 'Boolean'
) {
  return {
    String: 'string',
    Number: 'number',
    Integer: 'number',
    Date: 'Date',
    Boolean: 'boolean',
  }[t];
}
