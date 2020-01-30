import { Component, OnInit, ViewChild } from '@angular/core';
// import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.css']
})
export class AddProductAdminComponent implements OnInit {

  // @ViewChild("productForm", {static: true}) addProductForm: NgForm;
  
  submitted = false;

  product = {
    imageUrl: '',
    title: '',
    info: '',
    sizes: '',
    price: null
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit(productForm : NgForm) {

    this.product.imageUrl = productForm.value.imageUrl;
    this.product.title = productForm.value.title;
    this.product.info = productForm.value.info;
    this.product.sizes = productForm.value.sizes;
    this.product.price = productForm.value.price;

    this.submitted = true;

    productForm.reset();

    this.productService.addProduct(this.product).subscribe(
      (data) => console.log(data),
      (err: any) => console.log("error: ", err),
      () => console.log('All done adding product.')
    )

  }
}
