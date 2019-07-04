import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { imageURL } from 'src/app/utility/utility';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cartitem } from 'src/app/model/cartitem';
import { CartItemService } from 'src/app/services/cart-item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {

  products: Product[];
  

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private cartService: CartService,
    private cartItemService: CartItemService
    ) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.productService.setProducts(data);
        this.products = data;
      }
    );
  }

  ngOnDestory() {
  }


}
