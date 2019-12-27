import { Injectable } from '@angular/core';

import { products } from '../products';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = products;
  // items = [];

  getItems() {
    return this.products;
  }
  
  addToProducts(newProduct) {
    products.push(newProduct);
  }

  constructor(
    private http: HttpClient
  ) { }
}
