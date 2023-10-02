import { debounceTime, Subject, Subscription, tap } from 'rxjs';

/**
 * Temporarily hold the value for miliseconds (default 400ms), then set undefiend after the time passed,
 * You do not need to deal with subscription and unsubscription.
 */
export class TempValue<T = string> {
  private handlers: ((value: T | undefined) => void)[] = [];
  private sub!: Subscription;
  private closing = false;
  $value = new Subject<T | undefined>();

  private $stoper = this.$value.pipe(
    debounceTime(this.delay),
    tap((value: T | undefined) => {
      if (this.closing == true) {
        this.handlers.forEach((e) => e(value));
        this.$value.next(undefined);
        this.closing = false;
      }
    })
  );

  constructor(
    private readonly delay: number = 400,
    handler?: (value: T | undefined) => void
  ) {
    handler && this.handlers.push(handler);
    this.sub = this.$stoper.subscribe();
  }

  next(value: T) {
    this.closing = true;
    this.$value.next(value);
  }

  unsubscribe() {
    this.sub.unsubscribe();
  }
}
