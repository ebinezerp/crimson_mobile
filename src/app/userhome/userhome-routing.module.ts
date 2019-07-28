import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { CategoryProductComponent } from './category-product/category-product.component';

const routes: Routes = [
  {
    path: 'userhome',
    component: MainmenuComponent,
    children: [
      {
        path: 'main',
        component: MainpageComponent
      },
      {
        path: 'product/:id',
        component: ProductComponent
      },
      {
        path: 'category/prod/:id',
        component: CategoryProductComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'order/:id',
        component: OrderComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'support',
        component: SupportComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserhomeRoutingModule { }
