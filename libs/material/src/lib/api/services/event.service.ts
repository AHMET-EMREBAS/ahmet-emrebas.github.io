import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type EventObject<T = any> = {
  [name: string]: {
    type: string;
    payload?: T;
  };
};

@Injectable({ providedIn: 'root' })
export class EventService {
  readonly $events = new BehaviorSubject<EventObject>({});
}
