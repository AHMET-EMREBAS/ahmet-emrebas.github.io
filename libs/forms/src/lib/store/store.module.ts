import { NgModule } from '@angular/core';
import { StoreFormComponent } from './store-form.component';
import { StoreTableComponent } from './store-table.component';
import { RouterModule } from '@angular/router';
import { StoreService } from './store.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { StoreComponent } from './store.component';
import { routesStore } from './store.routes';

@NgModule({
  declarations: [StoreFormComponent, StoreTableComponent, StoreComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesStore),
  ],
  providers: [StoreService],
})
export class StoreModule {}
