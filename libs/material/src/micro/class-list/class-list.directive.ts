import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

/**
 * Class list items whose name either not starts with "__" nor ends with "Event"
 */
@Directive({
  selector: '[tbClassList]',
  standalone: true,
})
export class ClassListDirective implements AfterViewInit {
  @Input() tbClassList?: Record<string, any>;
  constructor(public readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    console.log(this.tbClassList);
    if (this.tbClassList) {
      console.log('Adding classes');
      const entries = Object.entries(this.tbClassList);
      console.log(entries);
      for (const [key, value] of entries) {
        if (
          value === '' ||
          key.startsWith('tooltip') ||
          key.startsWith('__') ||
          key.startsWith('native') ||
          key.startsWith('ng') ||
          key.startsWith('can') ||
          key.startsWith('emit') ||
          key.startsWith('handle') ||
          key.startsWith('children') ||
          key.startsWith('child') ||
          key.endsWith('Event') ||
          key.endsWith('Ref')
        ) {
          continue;
        }
        console.log('adding the class:', key, value);
        this.elementRef.nativeElement.classList.add(value);
      }
    }
  }
}
