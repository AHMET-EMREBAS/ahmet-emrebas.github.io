import { Injectable } from '@nestjs/common';
import { ServerLogger } from '@techbir/common/logger';

@Injectable()
export class LoggerService extends ServerLogger {}
