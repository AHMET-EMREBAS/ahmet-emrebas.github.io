type LogObjectMessage = Record<string, any>[];

export class Logger {
  protected __context = 'context';

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
