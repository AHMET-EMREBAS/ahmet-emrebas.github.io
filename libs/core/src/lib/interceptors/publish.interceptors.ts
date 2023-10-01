import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';

import { Observable, tap } from 'rxjs';
import { EndPointManager } from '../helpers';

export function PublishOnSaveInterceptor(epm: EndPointManager) {
  @Injectable()
  class __PublishSavedEventInterceptor<T, R> implements NestInterceptor<T, R> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<R> {
      return next.handle().pipe(
        tap((data) => {
          epm.publishSavedEvent(data);
        })
      );
    }
  }
  return UseInterceptors(__PublishSavedEventInterceptor);
}

export function PublishOnDeleteInterceptor(epm: EndPointManager) {
  @Injectable()
  class __PublishDeletedEventInterceptor<T, R>
    implements NestInterceptor<T, R>
  {
    intercept(context: ExecutionContext, next: CallHandler): Observable<R> {
      return next.handle().pipe(
        tap((data) => {
          epm.publishDeletedEvent(data);
        })
      );
    }
  }
  return UseInterceptors(__PublishDeletedEventInterceptor);
}

export function PublishOnChangeInterceptor(epm: EndPointManager) {
  @Injectable()
  class __PublishChangedEventInterceptor<T, R>
    implements NestInterceptor<T, R>
  {
    intercept(context: ExecutionContext, next: CallHandler): Observable<R> {
      return next.handle().pipe(
        tap((data) => {
          epm.publishChangedEvent(data);
        })
      );
    }
  }
  return UseInterceptors(__PublishChangedEventInterceptor);
}
