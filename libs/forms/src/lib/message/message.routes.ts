import { Routes } from '@angular/router';
import { MessageComponent } from './message.component';
import { MessageTableComponent } from './message-table.component';
import { MessageFormComponent } from './message-form.component';

export const routesMessage: Routes = [
  {
    path: '',
    component: MessageComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: MessageTableComponent,
        title: 'View Message',
      },
      {
        path: 'create',
        component: MessageFormComponent,
        title: 'Create Message',
      },
      {
        path: 'update/:id',
        component: MessageFormComponent,
        title: 'Update Message',
      },
    ],
  },
];
