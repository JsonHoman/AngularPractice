import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/product';
  }

  getAllProducts(): Observable<Product[]> {
    console.log('Getting all products from the server.');
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id): Observable<Product> {

    console.log("get product by id url", this.productsUrl + `/${id}`);
    // return this.http.get<Product>(this.productsUrl + `/${id}`, {
    //   headers: new HttpHeaders({
    //   'Accept': 'application/json'
    //   // 'Authorization': 'my-token'
    //   })
    // });
    return this.http.get<Product>(this.productsUrl + `/${id}`);
  }

  addProduct(product): Observable<any> {
    return this.http.post(this.productsUrl, product);
  }
}
