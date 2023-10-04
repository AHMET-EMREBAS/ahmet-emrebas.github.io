import { NgModule } from '@angular/core';
import { RoleFormComponent } from './role-form.component';
import { RoleTableComponent } from './role-table.component';
import { RouterModule, Routes } from '@angular/router';
import { RoleService } from './role.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: RoleTableComponent },
  {
    path: 'create',
    component: RoleFormComponent,
  },
  {
    path: 'update/:id',
    component: RoleFormComponent,
  },
];

@NgModule({
  declarations: [RoleFormComponent, RoleTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [RoleService],
})
export class RoleModule {}
