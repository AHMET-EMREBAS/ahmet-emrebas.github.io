import { NgModule } from '@angular/core';
import { FeatureFormComponent } from './feature-form.component';
import { FeatureTableComponent } from './feature-table.component';
import { RouterModule } from '@angular/router';
import { FeatureService } from './feature.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { FeatureComponent } from './feature.component';
import { routesFeature } from './feature.routes';

@NgModule({
  declarations: [FeatureFormComponent, FeatureTableComponent, FeatureComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesFeature),
  ],
  providers: [FeatureService],
})
export class FeatureModule {}
