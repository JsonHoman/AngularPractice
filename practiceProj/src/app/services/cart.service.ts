import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('../assets/shipping.json');
  }

  removeFromCart(item) {
    // probably loop through array and if it matches then slice
    let itemLocation = this.items.indexOf(item);
    this.items.splice(itemLocation, 1);
  }

  constructor(
    private http: HttpClient
  ) { }
}
