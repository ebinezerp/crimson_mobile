import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { RouterModule } from '@angular/router';
import { UserhomeRoutingModule } from './userhome-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { MainpageproductComponent } from './mainpageproduct/mainpageproduct.component';
import { CartComponent } from './cart/cart.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { CategoryProductComponent } from './category-product/category-product.component';

@NgModule({
  declarations: [
    MainpageComponent,
    MainmenuComponent,
    FooterComponent,
    ProductComponent,
    HeaderComponent,
    MainpageproductComponent,
    CartComponent,
    CartitemComponent,
    CheckoutComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemComponent,
    ProfileComponent,
    SupportComponent,
    CategoryProductComponent
  ],
 exports: [
  MainpageComponent,
  MainmenuComponent,
  FooterComponent,
  ProductComponent,
  HeaderComponent,
  MainpageproductComponent,
  CartComponent,
  CartitemComponent,
  CheckoutComponent,
  OrderComponent,
  OrdersComponent,
  OrderItemComponent,
  ProfileComponent,
  SupportComponent,
  CategoryProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    UserhomeRoutingModule,
  ]
})
export class UserhomeModule { }
