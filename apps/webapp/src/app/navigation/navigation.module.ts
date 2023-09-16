import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from '../app-material.module';
import { RouterModule } from '@angular/router';
import { SampleModule } from '../sample/sample.module';
import { LayoutModule } from '@techbir/material/layout';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavigationComponent,
        children: [{ path: 'sample', loadChildren: () => SampleModule }],
      },
    ]),
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
