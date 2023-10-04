import { NgModule } from '@angular/core';
import { PriceLevelFormComponent } from './price-level-form.component';
import { PriceLevelTableComponent } from './price-level-table.component';
import { RouterModule, Routes } from '@angular/router';
import { PriceLevelService } from './price-level.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: PriceLevelTableComponent },
  {
    path: 'create',
    component: PriceLevelFormComponent,
  },
  {
    path: 'update/:id',
    component: PriceLevelFormComponent,
  },
];

@NgModule({
  declarations: [PriceLevelFormComponent, PriceLevelTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [PriceLevelService],
})
export class PriceLevelModule {}
