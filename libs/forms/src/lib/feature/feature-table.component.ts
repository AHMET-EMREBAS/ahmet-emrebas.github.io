import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { FeatureService } from './feature.service';
import { Feature } from './feature';

@Component({
  selector: 'tb-feature-table',
  template: ` <tb-table
    [columns]="columns || []"
    [visibleColumns]="visibleColumns || []"
    [data]="(data$ | async) || []"
    [count]="(count$ | async) || 0"
    (sortEvent)="handleSortEvent($event)"
    (pageEvent)="handlePageEvent($event)"
    (searchEvent)="handleSearchEvent($event)"
    (rowClickEvent)="handleRowClickEvent($event)"
  ></tb-table>`,
})
export class FeatureTableComponent extends CommonTableComponent<Feature> {
  constructor(service: FeatureService) {
    super(service);
  }
}
