import { Component, OnInit } from '@angular/core';

import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => this.products = data,
      (err: any) => console.log("error: ", err),
      () => console.log('All done getting products.')
    );
  }

}
