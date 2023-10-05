import { NgModule } from '@angular/core';
import { PriceLevelFormComponent } from './price-level-form.component';
import { PriceLevelTableComponent } from './price-level-table.component';
import { RouterModule } from '@angular/router';
import { PriceLevelService } from './price-level.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { PriceLevelComponent } from './price-level.component';
import { routesPriceLevel } from './price-level.routes';

@NgModule({
  declarations: [
    PriceLevelFormComponent,
    PriceLevelTableComponent,
    PriceLevelComponent,
  ],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesPriceLevel),
  ],
  providers: [PriceLevelService],
})
export class PriceLevelModule {}
