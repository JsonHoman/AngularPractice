import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      fullName: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phoneNumber: '',
      email: ''
    });
  }

  removeFromCart(item) {
    window.alert("Item has been removed from the cart!");
    this.cartService.removeFromCart(item);
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted!', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}
