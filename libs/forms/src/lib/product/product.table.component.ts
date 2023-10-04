import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'tb-product-table',
  template: ` <tb-table
    [columns]="columns || []"
    [visibleColumns]="visibleColumns || []"
    [data]="(data$ | async) || []"
    [count]="(count$ | async) || 0"
    ()
  ></tb-table>`,
})
export class ProductTableComponent extends CommonTableComponent<Product> {
  override columns: string[] = ['id', 'name', 'description'];
  override visibleColumns: string[] = ['id', 'name', 'description'];

  constructor(service: ProductService) {
    super(service);

    service.addOneToCache({ id: 1, name: 'some', description: 'some' });
    service.addOneToCache({ id: 2, name: 'some', description: 'some' });
    service.addOneToCache({ id: 3, name: 'some', description: 'some' });
  }
}
