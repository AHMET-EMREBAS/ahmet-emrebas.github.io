import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form.component';
import { UserTableComponent } from './user-table.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { UserComponent } from './user.component';
import { routesUser } from './user.routes';

@NgModule({
  declarations: [UserFormComponent, UserTableComponent, UserComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesUser),
  ],
  providers: [UserService],
})
export class UserModule {}
