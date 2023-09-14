import { _BLACK, _BLUE_BG, _RED_BG, _WHITE, _YELLOW_BG } from './../colors';
import { Logger } from './logger';

export class ServerLogger extends Logger {
  protected override errorContext(): string {
    return _RED_BG(_WHITE(super.errorContext()));
  }

  protected override infoContext(): string {
    return _BLUE_BG(_WHITE(super.infoContext()));
  }

  protected override debugContext(): string {
    return _BLUE_BG(_WHITE(super.debugContext()));
  }

  protected override warnContext(): string {
    return _YELLOW_BG(_BLACK(super.warnContext()));
  }
}
