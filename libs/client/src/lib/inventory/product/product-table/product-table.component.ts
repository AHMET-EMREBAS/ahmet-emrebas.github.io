import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'ae-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  data$ = this.service.entities$;

  constructor(private readonly service: ProductService) {}
}
