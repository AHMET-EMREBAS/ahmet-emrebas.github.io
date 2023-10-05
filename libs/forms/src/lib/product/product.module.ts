import { NgModule } from '@angular/core';
import { ProductFormComponent } from './product-form.component';
import { ProductTableComponent } from './product-table.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { ProductComponent } from './product.component';
import { routesProduct } from './product.routes';

@NgModule({
  declarations: [ProductFormComponent, ProductTableComponent, ProductComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesProduct),
  ],
  providers: [ProductService],
})
export class ProductModule {}
