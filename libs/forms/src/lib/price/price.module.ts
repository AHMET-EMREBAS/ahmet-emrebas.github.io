import { NgModule } from '@angular/core';
import { PriceFormComponent } from './price-form.component';
import { PriceTableComponent } from './price-table.component';
import { RouterModule, Routes } from '@angular/router';
import { PriceService } from './price.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: PriceTableComponent },
  {
    path: 'create',
    component: PriceFormComponent,
  },
  {
    path: 'update/:id',
    component: PriceFormComponent,
  },
];

@NgModule({
  declarations: [PriceFormComponent, PriceTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [PriceService],
})
export class PriceModule {}
