/* eslint-disable @typescript-eslint/no-unused-vars */
const RESET = '\x1b[0m';
const BLACK = '\x1b[30m';
const WHITE = '\x1b[37m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const BLACK_BG = '\x1b[40m';
const WHITE_BG = '\x1b[47m';
const RED_BG = '\x1b[41m';
const GREEN_BG = '\x1b[42m';
const YELLOW_BG = '\x1b[43m';
const BLUE_BG = '\x1b[44m';
export const _WHITE = (msg: string) => `${WHITE} ${msg} ${RESET}`;
export const _BLACK = (msg: string) => `${BLACK} ${msg} ${RESET}`;
export const _RED = (msg: string) => `${RED} ${msg} ${RESET}`;
export const _GREEN = (msg: string) => `${GREEN} ${msg} ${RESET}`;
export const _YELLOW = (msg: string) => `${YELLOW} ${msg} ${RESET}`;
export const _BLUE = (msg: string) => `${BLUE} ${msg} ${RESET}`;
export const _WHITE_BG = (msg: string) => `${WHITE_BG} ${msg} ${RESET}`;
export const _BLACK_BG = (msg: string) => `${BLACK_BG} ${msg} ${RESET}`;
export const _RED_BG = (msg: string) => `${RED_BG} ${msg} ${RESET}`;
export const _GREEN_BG = (msg: string) => `${GREEN_BG} ${msg} ${RESET}`;
export const _YELLOW_BG = (msg: string) => `${YELLOW_BG} ${msg} ${RESET}`;
export const _BLUE_BG = (msg: string) => `${BLUE_BG} ${msg} ${RESET}`;

type LogObjectMessage = Record<string, any>[];

export class Logger {
  constructor(private __context: string = 'Context') {}

  context(contextx: string) {
    this.__context = contextx;
  }

  private now() {
    return new Date().toLocaleString();
  }

  private table(objs?: LogObjectMessage) {
    if (objs) {
      objs.forEach((e) => console.table(objs));
    }
  }

  protected preContext() {
    return `[${this.__context}]`;
  }

  protected infoContext() {
    return this.preContext();
  }
  protected warnContext() {
    return this.preContext();
  }
  protected debugContext() {
    return this.preContext();
  }
  protected errorContext() {
    return this.preContext();
  }

  protected infoContextStye() {
    return '';
  }
  protected warnContextStye() {
    return '';
  }
  protected debugContextStye() {
    return '';
  }
  protected errorContextStye() {
    return '';
  }

  protected infoMesageStye() {
    return '';
  }
  protected warnMesageStye() {
    return '';
  }
  protected debugMesageStye() {
    return '';
  }
  protected errorMesageStye() {
    return '';
  }

  protected infoTimestampStye() {
    return '';
  }
  protected warnTimestampStye() {
    return '';
  }
  protected debugTimestampStye() {
    return '';
  }
  protected errorTimestampStye() {
    return '';
  }

  protected infoTimestamp() {
    return this.now();
  }
  protected warnTimestamp() {
    return this.now();
  }
  protected debugTimestamp() {
    return this.now();
  }
  protected errorTimestamp() {
    return this.now();
  }

  protected preMessage(msg: string) {
    return msg;
  }

  protected infoMessage(msg: string) {
    return this.preMessage(msg);
  }
  protected warnMessage(msg: string) {
    return this.preMessage(msg);
  }
  protected debugMessage(msg: string) {
    return this.preMessage(msg);
  }
  protected errorMessage(msg: string) {
    return this.preMessage(msg);
  }

  info(message: string, objs?: LogObjectMessage) {
    console.log(
      `${this.infoContext()} ${this.infoTimestamp()} ${this.infoMessage(
        message
      )}`,
      this.infoContextStye(),
      this.infoTimestampStye(),
      this.infoMesageStye()
    );
    this.table(objs);
  }

  error(message: string, objs?: LogObjectMessage) {
    console.log(
      `${this.errorContext()} ${this.errorTimestamp()} ${this.errorMessage(
        message
      )}`,
      this.errorContextStye(),
      this.errorTimestampStye(),
      this.errorMesageStye()
    );
    this.table(objs);
  }

  warn(message: string, objs?: LogObjectMessage) {
    console.log(
      `${this.warnContext()} ${this.warnTimestamp()} ${this.warnMessage(
        message
      )}`,
      this.warnContextStye(),
      this.warnTimestampStye(),
      this.warnMesageStye()
    );
    this.table(objs);
  }

  debug(message: string, objs?: LogObjectMessage) {
    console.log(
      `${this.debugContext()} ${this.debugTimestamp()} ${this.debugMessage(
        message
      )}`,
      this.debugContextStye(),
      this.debugTimestampStye(),
      this.debugMesageStye()
    );
    this.table(objs);
  }
}
