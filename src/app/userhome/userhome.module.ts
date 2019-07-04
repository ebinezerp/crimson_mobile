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

@NgModule({
  declarations: [
    MainpageComponent,
    MainmenuComponent,
    FooterComponent,
    ProductComponent,
    HeaderComponent,
    MainpageproductComponent
  ],
 exports: [
  MainpageComponent,
  MainmenuComponent,
  FooterComponent,
  ProductComponent,
  HeaderComponent,
  MainpageproductComponent
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
