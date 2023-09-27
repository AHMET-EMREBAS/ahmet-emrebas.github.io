import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';
import { ListOfDays, MonthNum } from '../../api';

@Component({
  selector: 'tb-date-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="date-picker ">
      <div class="years">
        <span>Year</span>
        <input
          type="number"
          min="1"
          max="4000"
          maxlength="4"
          [(ngModel)]="year"
        />
        <span>Month</span>
        <input
          type="number"
          min="1"
          max="12"
          maxlength="2"
          [(ngModel)]="month"
        />
        <span>Range</span>
        <input
          type="number"
          min="1"
          max="31"
          maxlength="2"
          [(ngModel)]="selectRange"
        />
      </div>
      <div class="month select-range-{{ selectRange }}">
        <div class="dayname bold" *ngFor="let dayName of listOfDays()">
          {{ dayName | slice: 0:1 }}
        </div>
        <div
          class="day {{ color }} day-{{ date.day }}"
          *ngFor="let date of getDaysInMonth(year, month)"
          [class.current-date]="isCurrentDate(date)"
          [class.in-month]="date.month + 1 === month"
        >
          {{ date.day }}
        </div>
      </div>
    </div>
  `,
})
export class DateInputComponent extends CommonInputComponent {
  @Input() date = new Date();
  @Input() year = this.date.getFullYear();
  @Input() month = this.date.getMonth() + 1;
  @Input() day = this.date.getDate() + 1;
  @Input() selectRange = 3;

  openDate() {
    this.inputRef.nativeElement.focus();
    this.inputRef.nativeElement.dispatchEvent(
      new InputEvent('input', {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  getDaysInMonth(year: number, month: MonthNum) {
    month -= 1;

    const list42 = [];

    // 0 to 6
    const startDayOfweek = new Date(year, month).getDay();
    const thisMonthsLength = new Date(year, month + 1, 0).getDate();
    const previousMonthsLegth = new Date(year, month, 0).getDate();

    let daysFromPreviousMonth = previousMonthsLegth;

    for (let i = 1; i <= thisMonthsLength; i++) {
      list42.push({
        day: i,
        month,
        year,
      });
    }

    // 0 to 6
    // 1 --> 30  1 2 3 4 5 6
    // 2 --> 29 30 1 2 3 4 5
    // 3 --> 28 29 30 1 2 3 4
    // Add days from previous month
    for (let i = 0; i < startDayOfweek; i++) {
      list42.unshift({
        day: daysFromPreviousMonth--,
        month: month - 1,
        year,
      });
    }
    // Add days from next month
    const currentLength = list42.length;
    for (let i = 1; i <= 42 - currentLength; i++) {
      list42.push({
        day: i,
        month: month + 1,
        year,
      });
    }

    return list42;
  }

  listOfDays() {
    return ListOfDays;
  }

  isCurrentDate(date: { day: number; year: number; month: number }) {
    return (
      new Date(date.year, date.month, date.day).toLocaleDateString() ===
      new Date(Date.now()).toLocaleDateString()
    );
  }
}
