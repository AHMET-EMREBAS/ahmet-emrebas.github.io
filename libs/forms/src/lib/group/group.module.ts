import { NgModule } from '@angular/core';
import { GroupFormComponent } from './group-form.component';
import { GroupTableComponent } from './group-table.component';
import { RouterModule } from '@angular/router';
import { GroupService } from './group.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { GroupComponent } from './group.component';
import { routesGroup } from './group.routes';

@NgModule({
  declarations: [GroupFormComponent, GroupTableComponent, GroupComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesGroup),
  ],
  providers: [GroupService],
})
export class GroupModule {}
