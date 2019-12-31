import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.css']
})
export class DetailAdminComponent implements OnInit {
  product;
  productId;

  addToCart(product) {
    window.alert("the product has been added to the cart!");
    this.cartService.addToCart(product);
  }

  editProduct() {

  }

  removeProduct() {
    
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
      this.productId = +params.get('productId');
    });
  }

}

  

  

  