import { Component, OnInit } from '@angular/core';
import { OrderReciever } from 'src/app/model/order-receiver';
import { NgForm } from '@angular/forms';
import { OrderReceiverService } from 'src/app/services/order-receiver.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/model/user-details';
import { User } from 'src/app/model/user';
import { Address } from 'src/app/model/address';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private cartService: CartService,
    private userService: UserService,
    private userDetailsService: UserDetailsService) {
      this.user = new User();
      this.user.userDetails = new UserDetails();
      this.user.userDetails.address = new Address();
   }

  ngOnInit() {
    const user = this.userService.getUser();
    console.log(user);
    this.user = user;
    this.user.userDetails.address.addressId = 0;
  }

  submit(orderReceiverForm: NgForm) {
    this.userDetailsService.submit(this.user.userDetails).subscribe(
      (order) => {
        this.userDetailsService.userDetailsObservable.subscribe(
          (userDetails) => {
              this.router.navigate(['/userhome/order', order.orderId]).then(
                () => orderReceiverForm.reset()
              );
          });
        this.cartService.reset();
      }
    );
  }

}
