import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProductComponent } from './product/product.component';

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
