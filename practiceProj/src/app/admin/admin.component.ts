import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items;
  addProductForm;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { 
    this.items = this.productService.getItems();

    this.addProductForm = this.formBuilder.group({
      image: '',
      title: '',
      info: '',
      sizes: [''],
      price: ''
    });  
  }

  addToProducts(newProductData) {
    window.alert("Item has been added to products list!");
    this.productService.addToProducts(newProductData);
  }

  onSubmit(newProductData) {
    // Process checkout data here
    console.warn('New product has been submitted!', newProductData);

    // this.items = this.cartService.clearCart();
    // this.addProductForm.reset();
  }

  ngOnInit() {
  }

}
