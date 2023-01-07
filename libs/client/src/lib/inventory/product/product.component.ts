import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'ae-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(private readonly service: ProductService) {
    this.service.getAll().subscribe(console.log);
  }
}
