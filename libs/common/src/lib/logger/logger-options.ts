export class LoggerOptions {
  info = true;
  debug = true;
  error = true;
  warn = true;
  constructor(options?: Partial<LoggerOptions>) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
