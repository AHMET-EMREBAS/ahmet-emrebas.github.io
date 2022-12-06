import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./create-product/create-product.module').then(
            (m) => m.CreateProductModule
          ),
      },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
