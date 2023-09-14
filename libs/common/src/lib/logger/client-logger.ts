import { Logger } from './logger';

export class ClientLogger extends Logger {
  private addStyleTag(msg: string) {
    return `%c ${msg}`;
  }
  protected override errorContext(): string {
    return this.addStyleTag(super.errorContext());
  }
  protected override warnContext(): string {
    return this.addStyleTag(super.warnContext());
  }

  protected override infoContext(): string {
    return this.addStyleTag(super.infoContext());
  }

  protected override debugContext(): string {
    return this.addStyleTag(super.debugContext());
  }

  protected override errorContextStye(): string {
    return 'color:white; background-color:red';
  }
  protected override warnContextStye(): string {
    return 'color:white; background-color:orange';
  }

  protected override infoContextStye(): string {
    return 'color:white; background-color:royalblue';
  }

  protected override debugContextStye(): string {
    return 'color:black; background-color:yellow';
  }

  protected override errorMessage(msg: string): string {
    return this.addStyleTag(super.errorMessage(msg));
  }

  protected override errorTimestamp(): string {
    return `%c ${super.errorTimestamp()}`;
  }

  protected override errorMesageStye(): string {
    return `color:black; background-color:white`;
  }
}
