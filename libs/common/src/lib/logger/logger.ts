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
  constructor(protected __context: string = 'Context') {}

  setContext(contextx: string) {
    this.__context = contextx;
  }

  protected timestamp() {
    return new Date().toLocaleString();
  }

  protected table(objs?: LogObjectMessage) {
    if (objs) {
      objs.forEach((e) => console.table(objs));
    }
  }

  protected context() {
    return `[${this.__context}]`;
  }

  protected infoContext() {
    return this.context();
  }

  protected warnContext() {
    return this.context();
  }

  protected debugContext() {
    return this.context();
  }

  protected errorContext() {
    return this.context();
  }

  protected defaultStyle() {
    return '';
  }

  protected infoContextStyle() {
    return this.defaultStyle();
  }

  protected warnContextStyle() {
    return this.defaultStyle();
  }

  protected debugContextStyle() {
    return this.defaultStyle();
  }

  protected errorContextStyle() {
    return this.defaultStyle();
  }

  protected infoMesageStyle() {
    return this.defaultStyle();
  }

  protected warnMesageStyle() {
    return this.defaultStyle();
  }

  protected debugMesageStyle() {
    return this.defaultStyle();
  }

  protected errorMesageStyle() {
    return this.defaultStyle();
  }

  protected infoTimestampStyle() {
    return this.defaultStyle();
  }

  protected warnTimestampStyle() {
    return this.defaultStyle();
  }

  protected debugTimestampStyle() {
    return this.defaultStyle();
  }

  protected errorTimestampStyle() {
    return this.defaultStyle();
  }

  protected infoTimestamp() {
    return this.timestamp();
  }

  protected warnTimestamp() {
    return this.timestamp();
  }

  protected debugTimestamp() {
    return this.timestamp();
  }

  protected errorTimestamp() {
    return this.timestamp();
  }

  protected message(msg: string) {
    return `${msg}`;
  }

  protected infoMessage(msg: string) {
    return this.message(msg);
  }

  protected warnMessage(msg: string) {
    return this.message(msg);
  }

  protected debugMessage(msg: string) {
    return this.message(msg);
  }

  protected errorMessage(msg: string) {
    return this.message(msg);
  }

  info(message: string, objs?: LogObjectMessage) {
    console.log(
      `${this.infoContext()} ${this.infoTimestamp()} ${this.infoMessage(
        message
      )}`,
      this.infoContextStyle(),
      this.infoTimestampStyle(),
      this.infoMesageStyle()
    );
    this.table(objs);
  }

  error(message: string, objs?: LogObjectMessage) {
    console.log(
      `${this.errorContext()} ${this.errorTimestamp()} ${this.errorMessage(
        message
      )}`,
      this.errorContextStyle(),
      this.errorTimestampStyle(),
      this.errorMesageStyle()
    );
    this.table(objs);
  }

  warn(message: string, objs?: LogObjectMessage) {
    console.log(
      `${this.warnContext()} ${this.warnTimestamp()} ${this.warnMessage(
        message
      )}`,
      this.warnContextStyle(),
      this.warnTimestampStyle(),
      this.warnMesageStyle()
    );
    this.table(objs);
  }

  debug(message: string, objs?: LogObjectMessage) {
    console.log(
      `${this.debugContext()} ${this.debugTimestamp()} ${this.debugMessage(
        message
      )}`,
      this.debugContextStyle(),
      this.debugTimestampStyle(),
      this.debugMesageStyle()
    );
    this.table(objs);
  }
}
