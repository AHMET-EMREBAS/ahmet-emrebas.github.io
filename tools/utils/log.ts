import { appendFileSync } from 'fs';
import { join } from 'path';
import { _GREEN, _WHITE, _RED } from './colors';

const LOG_DIR = join(__dirname, '../../tmp/logs');
export class Logger {
  constructor(private readonly context: string) {
    this.log(`Started ${new Date()}`);
  }

  private write(message: string) {
    appendFileSync(
      join(LOG_DIR, `${this.context}.log`),
      this.buildMessage(message) + '\n'
    );
  }

  buildMessage(message: string) {
    return `[${this.context}] ${new Date().toLocaleString()} ${_WHITE(
      message
    )}`;
  }

  log(message: string) {
    console.log(_GREEN(this.buildMessage(message)));
    this.write(message);
  }

  error(message: string) {
    console.error(_RED(this.buildMessage(message)));
  }
}

export function createLogger(context: string) {
  const logger = new Logger(context);

  return {
    log: (message: string) => logger.log(message),
    error: (message: string) => logger.error(message),
  };
}
