import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ProductService } from '../services/product.service';
import { Product } from '../classes/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // items;
  // addProductForm;

  product: Product;

  constructor(
    // private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { 
    // this.items = this.productService.getProducts();

    this.product = new Product();

    // this.addProductForm = this.formBuilder.group({
    //   image: '',
    //   title: '',
    //   info: '',
    //   sizes: [''],
    //   price: ''
    // });  
  }

  // addToProducts(newProductData) {
  //   window.alert("Item has been added to products list!");
  //   this.productService.addToProducts(newProductData);
  // }

  onSubmit() {
    // Process checkout data here
    // console.warn('New product has been submitted!', newProductData);

    // this.items = this.cartService.clearCart();
    // this.addProductForm.reset();

    
  }

  gotoProductList() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
