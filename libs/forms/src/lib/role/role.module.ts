import { NgModule } from '@angular/core';
import { RoleFormComponent } from './role-form.component';
import { RoleTableComponent } from './role-table.component';
import { RouterModule } from '@angular/router';
import { RoleService } from './role.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { RoleComponent } from './role.component';
import { routesRole } from './role.routes';

@NgModule({
  declarations: [RoleFormComponent, RoleTableComponent, RoleComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesRole),
  ],
  providers: [RoleService],
})
export class RoleModule {}
