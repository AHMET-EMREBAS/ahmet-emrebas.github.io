import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ae-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements AfterViewInit {
  isSubmitted = false;
  isProductFormSubmitted = false;
  isPriceFormSubmitted = false;

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  priceForm = new FormGroup({
    price: new FormControl(0),
    cost: new FormControl(0),
  });

  quantity = new FormGroup({
    quantity: new FormControl(0),
  });

  category = new FormGroup({
    category: new FormControl(),
  });

  categories = [
    { id: 1, label: 'Category 1' },
    { id: 2, label: 'Category 2' },
    { id: 3, label: 'Category 3' },
    { id: 4, label: 'Category 4' },
    { id: 5, label: 'Category 5' },
  ];

  talk = new EventSource('http://localhost:3333/api/talk');

  submit() {
    console.log('Submitting form');
    console.log(this.productForm.value);
    this.isSubmitted = true;
  }

  submitProduct() {
    console.log(this.productForm.value);
    this.isProductFormSubmitted = true;
  }
  submitPrice() {
    console.log(this.productForm.value);
    this.isPriceFormSubmitted = true;
  }

  ngAfterViewInit(): void {
    this.talk.onopen = () => console.log('Connected to event source [talk]');
    this.talk.onmessage = (message: any) => console.log(message);
  }
}
