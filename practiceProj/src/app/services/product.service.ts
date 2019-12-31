import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl: string;

  getAllProducts(): Observable<Product[]> {
    console.log('Getting all books from the server.');
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/id', {
      headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'my-token'
      })
    });
  }

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/product';
  }
}
