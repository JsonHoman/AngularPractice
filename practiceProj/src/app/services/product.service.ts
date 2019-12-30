import { Injectable } from '@angular/core';

// import { products } from '../products';

import { Product } from '../classes/product';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products = products;
  // items = [];

  private productsUrl: string;

  // getItems() {
  //   return this.products;
  // }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  
  // addToProducts(newProduct) {
  //   products.push(newProduct);
  // }

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/product';
  }
}



// constructor(
//   private http: HttpClient
// ) { }