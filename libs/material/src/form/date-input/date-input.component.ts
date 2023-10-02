import { AfterViewInit, Component } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-date-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="input-container {{ color }} {{ variant }} ">
      <span class="icon">{{ icon }}</span>
      <label class="label" [for]="id()">{{ label }}</label>
      <input class="input" #input [(ngModel)]="value" [id]="id()" type="date" (input)="emit()" />
    </div>
  `,
})
export class DateInputComponent extends CommonInputComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {
    this.inputRef.nativeElement.setAttribute('has-value', 'true')
  }
}
