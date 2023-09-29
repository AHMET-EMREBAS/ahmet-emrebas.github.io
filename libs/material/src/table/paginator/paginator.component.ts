import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { ButtonModule } from '../../button';
import { SelectOption } from '../../api';
import { SimpleSelectComponent } from '../../form/simple-select/simple-select.component';

@Component({
  selector: 'tb-paginator',
  standalone: true,
  imports: [MicroModule, ButtonModule, SimpleSelectComponent],
  template: `
    <div class="flex row justify-space-between align-center gap-4em p-1em">
      <span>Showing {{ pageLength }} of {{ itemCount }} items</span>
      <div class="flex row gap-1em center border-1">
        <span>Page length</span>
        <tb-button
          size="small"
          [label]="pl + ''"
          (click)="setPageLength(pl)"
          [variant]="pageLength === pl ? 'stroked' : 'basic'"
          *ngFor="let pl of pageLengthOptions"
        ></tb-button>
      </div>
      <div class="flex row gap-1em p-1em align-center ">
        <tb-icon-button
          size="small"
          icon="first_page"
          (clickEvent)="firstPage()"
        ></tb-icon-button>

        <tb-icon-button
          size="small"
          variant="stroked"
          icon="navigate_before"
          (clickEvent)="previous()"
        ></tb-icon-button>

        <div class="flex row gap-1em ">
          <tb-button
            size="small"
            [label]="b + ''"
            [variant]="currentPage === b ? 'stroked' : 'basic'"
            *ngFor="let b of getPageButtons()"
            (click)="selectPage(b)"
          ></tb-button>
        </div>
        <tb-icon-button
          size="small"
          variant="stroked"
          icon="navigate_next"
          (clickEvent)="next()"
        ></tb-icon-button>

        <tb-icon-button
          size="small"
          icon="last_page"
          (clickEvent)="lastPage()"
        ></tb-icon-button>
      </div>
    </div>
  `,
  styles: [],
})
export class PaginatorComponent {
  currentPage = 1;

  @Input() pageLength = 10;
  @Input() pageLengthOptions = [4, 10, 20, 50, 100];
  @Input() itemCount = 100;
  @Output() pageEvent = new EventEmitter();

  setPageLength(length: number) {
    this.pageLength = length;
    this.currentPage = 1;
    this.emitPageEvent();
  }

  selectPage(pn: number) {
    this.currentPage = pn;
    this.emitPageEvent();
  }
  next() {
    if (this.currentPage * this.pageLength < this.itemCount) {
      this.currentPage++;
    }
    this.emitPageEvent();
  }
  previous() {
    if (this.currentPage >= 2) {
      this.currentPage--;
    }
    this.emitPageEvent();
  }

  getPageButtons() {
    if (this.currentPage <= 1) {
      return [1, 2, 3];
    }
    if (this.pageLength * (this.currentPage + 1) <= this.itemCount) {
      return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
    }

    return [this.currentPage - 2, this.currentPage - 1, this.currentPage];
  }

  firstPage() {
    this.currentPage = 1;
    this.emitPageEvent();
  }

  lastPage() {
    this.currentPage = Math.ceil(this.itemCount / this.pageLength);
    this.emitPageEvent();
  }

  emitPageEvent() {
    this.pageEvent.emit({
      pageLength: this.pageLength,
      page: this.currentPage,
    });
  }

  getPageLengthOptions(): SelectOption[] {
    return this.pageLengthOptions.map((e) => {
      return {
        value: e.toString(),
        icon: 'table_chart',
      };
    });
  }
}
