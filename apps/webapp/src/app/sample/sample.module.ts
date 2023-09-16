import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SampleComponent } from './sample.component';
import { MaterialModule } from '../app-material.module';
import { ViewSampleComponent } from './view-sample/view-sample.component';
import { CreateSampleComponent } from './create-sample/create-sample.component';
import { UpdateSampleComponent } from './update-sample/update-sample.component';

@NgModule({
  declarations: [
    SampleComponent,
    ViewSampleComponent,
    CreateSampleComponent,
    UpdateSampleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: SampleComponent,
        children: [
          { path: '', component: ViewSampleComponent },
          { path: 'create', component: CreateSampleComponent },
          { path: 'update/:id', component: UpdateSampleComponent },
        ],
      },
    ]),
  ],
})
export class SampleModule {}
