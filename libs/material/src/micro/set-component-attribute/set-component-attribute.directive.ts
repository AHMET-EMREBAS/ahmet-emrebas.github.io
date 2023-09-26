import {
  AfterViewInit,
  ComponentRef,
  Directive,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[tbSetComponentAttribute]',
  standalone: true,
})
export class SetComponentAttributeDirective implements OnInit {
  @Input() componentRef?: ComponentRef<any>;
  @Input() tbSetComponentAttribute?: Record<string, any>;

  ngOnInit(): void {
    if (this.tbSetComponentAttribute) {
      console.log(this.componentRef);
      const attributes = Object.entries(this.tbSetComponentAttribute);
      for (const [key, value] of attributes) {
        if (key.startsWith('__')) {
          continue;
        }
        console.log(`Adding input : ${key}  : ${value}`);
        this.componentRef?.setInput(key, value);
      }
    }
  }
}
