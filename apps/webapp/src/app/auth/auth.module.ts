import { NgModule } from '@angular/core';
import { MicroModule } from '@techbir/material';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    MicroModule,
    RouterModule.forChild([
      { path: '', component: AuthComponent, children: [{}] },
    ]),
  ],
})
export class AuthModule {}
