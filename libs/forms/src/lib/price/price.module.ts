import { NgModule } from '@angular/core';
import { PriceFormComponent } from './price-form.component';
import { PriceTableComponent } from './price-table.component';
import { RouterModule } from '@angular/router';
import { PriceService } from './price.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { PriceComponent } from './price.component';
import { routesPrice } from './price.routes';

@NgModule({
  declarations: [PriceFormComponent, PriceTableComponent, PriceComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesPrice),
  ],
  providers: [PriceService],
})
export class PriceModule {}
