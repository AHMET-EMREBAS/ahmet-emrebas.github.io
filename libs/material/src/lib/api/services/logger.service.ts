import { Injectable } from '@angular/core';
import { ClientLogger } from '@techbir/common/logger';

@Injectable({ providedIn: 'root' })
export class LoggerService extends ClientLogger {}
