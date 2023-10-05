import { NgModule } from '@angular/core';
import { PermissionFormComponent } from './permission-form.component';
import { PermissionTableComponent } from './permission-table.component';
import { RouterModule } from '@angular/router';
import { PermissionService } from './permission.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { PermissionComponent } from './permission.component';
import { routesPermission } from './permission.routes';

@NgModule({
  declarations: [
    PermissionFormComponent,
    PermissionTableComponent,
    PermissionComponent,
  ],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesPermission),
  ],
  providers: [PermissionService],
})
export class PermissionModule {}
