import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Cartitem } from 'src/app/model/cartitem';
import { imageURL } from 'src/app/utility/utility';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-mainpageproduct',
  templateUrl: './mainpageproduct.component.html',
  styleUrls: ['./mainpageproduct.component.scss'],
})
export class MainpageproductComponent implements OnInit {

  @Input() product: Product;
  imageUrl: string;
  private cartItems: Cartitem[];
  cartItem: Cartitem;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private cartService: CartService,
    private cartItemService: CartItemService
  ) {
    this.imageUrl = imageURL;
  }

  ngOnInit() {
    this.cartService.getCart().subscribe(
      (cart) => {
           console.log('executing');
           this.assignCartItem(cart).then(
             () => console.log(this.cartItem.quantity)
           );
      }
    );
  }

  addToCart() {
    let cartItem: Cartitem = this.cartService.getCartItem(this.product.id);
    if (cartItem === undefined) {
        cartItem = this.cartItemService.createCartItem(this.product.id);
    } else {
      this.cartItemService.updateCartItem(this.cartItem, 1);
    }
    this.cartService.addItemToCart(cartItem);
  }

  assignCartItem(cart): Promise<void> {
    return new Promise(() => {
      this.cartItem = cart.cartItems.find((cartItem) => {
        if (this.product.id === cartItem.product.id) {
          return true;
        }
     });
    });
  }

  removeFromCart() {
  }

}
