import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent, ButtonComponent } from '@techbir/material';
@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    ToolbarComponent,
    ButtonComponent,
    RouterModule.forChild([
      {
        path: '',
        component: NavigationComponent,
      },
    ]),
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
