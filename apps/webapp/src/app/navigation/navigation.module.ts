import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { SampleModule } from '../sample/sample.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,

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
