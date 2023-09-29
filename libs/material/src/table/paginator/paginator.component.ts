import { AfterViewInit, Component, EventEmitter, Input } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { ButtonModule } from '../../button';

@Component({
  selector: 'tb-paginator',
  standalone: true,
  imports: [MicroModule, ButtonModule],
  template: `
    <div class="flex row align-center gap-4em">
      <span>Showing {{ pageLength }} of {{ itemCount }} items</span>
      <div class="flex row gap-4em align-center ">
        <tb-icon-button
          size="small"
          variant="stroked"
          icon="navigate_before"
          (clickEvent)="previous()"
        ></tb-icon-button>
        <div class="flex row gap-2em">
          <tb-button
            size="small"
            label="First"
            (clickEvent)="firstPage()"
          ></tb-button>
          <tb-button
            size="small"
            [label]="b + ''"
            *ngFor="let b of getPageButtons()"
            (click)="selectPage(b)"
          ></tb-button>
          <tb-button
            size="small"
            label="Last"
            (clickEvent)="lastPage()"
          ></tb-button>
        </div>
        <tb-icon-button
          size="small"
          variant="stroked"
          icon="navigate_next"
          (clickEvent)="next()"
        ></tb-icon-button>
      </div>
    </div>
  `,
  styles: [],
})
export class PaginatorComponent implements AfterViewInit {
  currentPage = 1;

  @Input() pageLength = 10;
  @Input() pageLengthOptions = [4, 10, 20, 50, 100];
  @Input() itemCount = 100;
  @Input() changeEvent = new EventEmitter();

  ngAfterViewInit(): void {
    this.emitChangeEvent();
  }

  selectPage(pn: number) {
    this.currentPage = pn;
  }
  next() {
    if (this.currentPage * this.pageLength < this.itemCount) {
      this.currentPage++;
    }
    this.emitChangeEvent();
  }
  previous() {
    if (this.currentPage >= 2) {
      this.currentPage--;
    }
    this.emitChangeEvent();
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

    this.emitChangeEvent();
  }

  lastPage() {
    this.currentPage = this.itemCount / this.pageLength;
    this.emitChangeEvent();
  }

  emitChangeEvent() {
    this.changeEvent.emit({ ...this });
  }
}
