import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailAdminComponent } from './detail-admin/detail-admin.component';
import { DetailUpdateAdminComponent } from './detail-update-admin/detail-update-admin.component';
import { AddProductAdminComponent } from './add-product-admin/add-product-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product/:productId', component: DetailComponent },
  { path: 'productAdmin/:productId', component: DetailAdminComponent },
  { path: 'productUpdateAdmin/:productId', component: DetailUpdateAdminComponent },
  { path: 'productAddAdmin', component: AddProductAdminComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
