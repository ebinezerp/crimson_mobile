import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  user: User;
  role = 'ROLE_USER';
  errorMessages = {};

  constructor(private userService: UserService, private router: Router ) {
    this.user = new User();
  }

  ngOnInit() {}

  submit(ngFrom: NgForm) {
    this.userService.addUser(this.user).subscribe(
      (data) => {
        ngFrom.reset();
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error.error);
        this.errorMessages = error.error;
      }
    );
  }

}
