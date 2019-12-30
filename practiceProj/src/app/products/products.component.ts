import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = products;

  products2: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products2 = data;
    });
  }

  // onCreateProduct() {

  // }

  // onUpdateProduct() {

  // }

  // onDeleteProduct() {
    
  // }

}
