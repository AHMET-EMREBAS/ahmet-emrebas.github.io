export function splitGet(
  text: string,
  delimeter: string,
  newDelimeter: string = '',
  count: number = 1
) {
  return text.split(delimeter).slice(0, count).join(newDelimeter);
}
