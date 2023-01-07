import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductComponent } from './product.component';
import { PRODUCT_ROUTES } from './product.routes';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductFormComponent,
    ProductEditorComponent,
    ProductTableComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(PRODUCT_ROUTES), TableModule],
  providers: [ProductService],
})
export class ProductModule {}
