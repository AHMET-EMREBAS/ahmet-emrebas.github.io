import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type EventObject<T = any> = {
  type: string;
  target: string;
  payload?: T;
};

@Injectable({ providedIn: 'root' })
export class EventService {
  readonly $events = new BehaviorSubject<EventObject>({ type: '', target: '' });
}
