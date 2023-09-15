import { Logger } from './logger';

export class ClientLogger extends Logger {
  private commonStyle(style: string) {
    return `${style}  
    font-size:13pt; 
    font-family:Arial; 
    border:1px solid gray; 
    border-radius:20px; 
    padding:3px; 
    padding-left:10px; 
    padding-right:10px;
    margin-right:3px;
    `;
  }
  protected override defaultStyle(): string {
    return this.commonStyle('color:black; background-color:white;');
  }

  protected override context(): string {
    return '%c ' + super.context();
  }

  protected override message(msg: string): string {
    return `%c ${msg}`;
  }

  protected override timestamp(): string {
    return `%c ${new Date().toLocaleString()}`;
  }

  protected override errorContextStyle(): string {
    return this.commonStyle('color:white; background-color:red;');
  }

  protected override warnContextStyle(): string {
    return this.commonStyle('color:white; background-color:orange;');
  }

  protected override debugContextStyle(): string {
    return this.commonStyle('color:white; background-color:blue;');
  }

  protected override infoContextStyle(): string {
    return this.commonStyle('color:white; background-color:blue;');
  }
}
