import { NgModule } from '@angular/core';
import { CategoryFormComponent } from './category-form.component';
import { CategoryTableComponent } from './category-table.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryService } from './category.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: CategoryTableComponent },
  {
    path: 'create',
    component: CategoryFormComponent,
  },
  {
    path: 'update/:id',
    component: CategoryFormComponent,
  },
];

@NgModule({
  declarations: [CategoryFormComponent, CategoryTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
