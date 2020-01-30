import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service'
import { Product } from '../classes/product'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-update-admin',
  templateUrl: './detail-update-admin.component.html',
  styleUrls: ['./detail-update-admin.component.css']
})
export class DetailUpdateAdminComponent implements OnInit {

  product: Product;

  productId: number;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('productId');
    });

    this.productService.getProductById(this.productId).subscribe(
      (data: Product) => this.product = data,
      (err: any) => console.log(err),
      () => console.log('All done getting product.')
    )
  }

}
