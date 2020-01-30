import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { Product } from '../classes/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  products: Product[];
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { 

    // this.product = new Product();
    this.product;

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => this.products = data,
      (err: any) => console.log(err),
      () => console.log('All done getting products.')
    );
  }
}

  

  




