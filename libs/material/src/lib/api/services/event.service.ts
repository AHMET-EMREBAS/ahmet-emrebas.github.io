import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventObject } from '../types';



@Injectable({ providedIn: 'root' })
export class EventService {
  readonly $events = new BehaviorSubject<EventObject>({ type: 'ignore', target: '' });
}
