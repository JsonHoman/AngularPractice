import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailAdminComponent } from './detail-admin/detail-admin.component';
import { DetailUpdateAdminComponent } from './detail-update-admin/detail-update-admin.component';
import { AddProductAdminComponent } from './add-product-admin/add-product-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductsComponent,
    DetailComponent,
    AdminComponent,
    CartComponent,
    MenuComponent,
    ShippingComponent,
    CheckoutComponent,
    DetailAdminComponent,
    DetailUpdateAdminComponent,
    AddProductAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
