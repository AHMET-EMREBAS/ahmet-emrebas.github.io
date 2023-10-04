import { NgModule } from '@angular/core';
import { FeatureFormComponent } from './feature-form.component';
import { FeatureTableComponent } from './feature-table.component';
import { RouterModule, Routes } from '@angular/router';
import { FeatureService } from './feature.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: FeatureTableComponent },
  {
    path: 'create',
    component: FeatureFormComponent,
  },
  {
    path: 'update/:id',
    component: FeatureFormComponent,
  },
];

@NgModule({
  declarations: [FeatureFormComponent, FeatureTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [FeatureService],
})
export class FeatureModule {}
