import { NgModule } from '@angular/core';
import { ProductFormComponent } from './product-form.component';
import { ProductTableComponent } from './product.table.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './product.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

export const productRoutes: Routes = [
  { path: '', component: ProductTableComponent },
  {
    path: 'create',
    component: ProductFormComponent,
  },
  {
    path: 'update/:id',
    component: ProductFormComponent,
  },
];

@NgModule({
  declarations: [ProductFormComponent, ProductTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(productRoutes),
  ],
  providers: [ProductService],
})
export class ProductModule {}
