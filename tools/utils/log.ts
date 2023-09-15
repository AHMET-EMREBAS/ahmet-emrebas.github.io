import { appendFileSync } from 'fs';
import { join } from 'path';
import { red, green, white } from 'colors';

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
    return `[${this.context}] ${new Date().toLocaleString()} ${white(message)}`;
  }

  log(message: string) {
    console.log(green(this.buildMessage(message)));
    this.write(message);
  }

  error(message: string) {
    console.error(red(this.buildMessage(message)));
  }
}

export function createLogger(context: string) {
  const logger = new Logger(context);

  return {
    log: (message: string) => logger.log(message),
    error: (message: string) => logger.error(message),
  };
}
