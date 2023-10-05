import { NgModule } from '@angular/core';
import { MessageFormComponent } from './message-form.component';
import { MessageTableComponent } from './message-table.component';
import { RouterModule } from '@angular/router';
import { MessageService } from './message.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { MessageComponent } from './message.component';
import { routesMessage } from './message.routes';

@NgModule({
  declarations: [MessageFormComponent, MessageTableComponent, MessageComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesMessage),
  ],
  providers: [MessageService],
})
export class MessageModule {}
