export function delay(duration: number, handler: () => void) {
  setTimeout(() => {
    handler();
  }, duration);
}
