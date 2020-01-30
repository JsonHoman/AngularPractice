import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../classes/product';
import { CartService } from '../services/cart.service'
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.css']
})
export class DetailAdminComponent implements OnInit {
  // product: Product = new Product();
  product: Product;
  productId: number;

  sizesArray: string[];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('productId');
    });

    this.productService.getProductById(this.productId).subscribe(
      (data: Product) => {this.product = data; this.sizesArray = data.sizes.split(",")},
      (err: any) => console.log("error: ", err),
      () => console.log('All done getting product.')
    )

    // this.productService.getProductById(this.productId).subscribe(
    //   (data: Product) => this.product = data,
    //   (err: any) => console.log("error: ", err),
    //   () => console.log('All done getting product.')
    // )

  }
}

  

  

  