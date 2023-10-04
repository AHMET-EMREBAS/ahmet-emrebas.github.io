import { NgModule } from '@angular/core';
import { GroupFormComponent } from './group-form.component';
import { GroupTableComponent } from './group-table.component';
import { RouterModule, Routes } from '@angular/router';
import { GroupService } from './group.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: GroupTableComponent },
  {
    path: 'create',
    component: GroupFormComponent,
  },
  {
    path: 'update/:id',
    component: GroupFormComponent,
  },
];

@NgModule({
  declarations: [GroupFormComponent, GroupTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [GroupService],
})
export class GroupModule {}
