import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { IconComponent } from '../icon/icon.component';
import { ListLabelComponent } from './list-label/list-label.component';
import { ListIconComponent } from './list-icon/list-icon.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    ListLabelComponent,
    ListIconComponent,
  ],
  imports: [CommonModule, IconComponent],
  exports: [
    ListComponent,
    ListItemComponent,
    ListLabelComponent,
    ListIconComponent,
  ],
})
export class ListModule {}
