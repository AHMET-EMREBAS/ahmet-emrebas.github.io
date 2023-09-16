import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NavListComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavListComponent],
})
export class NavListModule {}
