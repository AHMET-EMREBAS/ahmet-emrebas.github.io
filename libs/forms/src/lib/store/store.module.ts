import { NgModule } from '@angular/core';
import { StoreFormComponent } from './store-form.component';
import { StoreTableComponent } from './store-table.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreService } from './store.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: StoreTableComponent },
  {
    path: 'create',
    component: StoreFormComponent,
  },
  {
    path: 'update/:id',
    component: StoreFormComponent,
  },
];

@NgModule({
  declarations: [StoreFormComponent, StoreTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [StoreService],
})
export class StoreModule {}
