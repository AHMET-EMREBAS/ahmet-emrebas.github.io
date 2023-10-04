import { NgModule } from '@angular/core';
import { MessageFormComponent } from './message-form.component';
import { MessageTableComponent } from './message-table.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageService } from './message.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: MessageTableComponent },
  {
    path: 'create',
    component: MessageFormComponent,
  },
  {
    path: 'update/:id',
    component: MessageFormComponent,
  },
];

@NgModule({
  declarations: [MessageFormComponent, MessageTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [MessageService],
})
export class MessageModule {}
