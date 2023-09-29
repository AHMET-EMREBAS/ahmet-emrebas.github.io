/**
 * Clear the space in text
 * @param text string
 * @returns string
 */
export function clearSpace(text: string) {
  return text
    ?.split(' ')
    .map((e) => e.trim())
    .filter((e) => e.length > 0)
    .join(' ')
    .split('\n')
    .join(' ');
}

/**
 * Clear all space characters in the text and contact entire string.
 * @param text
 * @returns
 */
export function concatAll(text: string) {
  return clearSpace(text).split(' ').join('');
}
