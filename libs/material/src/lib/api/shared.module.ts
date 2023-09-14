import { NgModule, isDevMode } from '@angular/core';
import { LoggerService } from './logger.service';

@NgModule({
  providers: [
    {
      provide: LoggerService,
      useFactory: () => {
        if (isDevMode()) {
          return LoggerService;
        }
        return undefined;
      },
    },
  ],
  exports: [LoggerService],
})
export class SharedModule {}
