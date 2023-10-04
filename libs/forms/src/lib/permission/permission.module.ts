import { NgModule } from '@angular/core';
import { PermissionFormComponent } from './permission-form.component';
import { PermissionTableComponent } from './permission-table.component';
import { RouterModule, Routes } from '@angular/router';
import { PermissionService } from './permission.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: PermissionTableComponent },
  {
    path: 'create',
    component: PermissionFormComponent,
  },
  {
    path: 'update/:id',
    component: PermissionFormComponent,
  },
];

@NgModule({
  declarations: [PermissionFormComponent, PermissionTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [PermissionService],
})
export class PermissionModule {}
