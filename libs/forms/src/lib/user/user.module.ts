import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form.component';
import { UserTableComponent } from './user-table.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: UserTableComponent },
  {
    path: 'create',
    component: UserFormComponent,
  },
  {
    path: 'update/:id',
    component: UserFormComponent,
  },
];

@NgModule({
  declarations: [UserFormComponent, UserTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [UserService],
})
export class UserModule {}
