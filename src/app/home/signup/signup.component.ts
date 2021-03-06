import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { UserCategory } from 'src/app/model/user-category';
import { UserCategoryService } from 'src/app/services/user-category.service';
import { UserDetails } from 'src/app/model/user-details';
import { Address } from 'src/app/model/address';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  user: User;
  role = 'ROLE_USER';
  errorMessages = {};
  userCategories: UserCategory[];

  constructor(
    private userService: UserService,
    private router: Router,
    private userCategoryService: UserCategoryService ) {
    this.user = new User();
    this.user.userDetails = new UserDetails();
    this.user.userDetails.address = new Address();
    this.user.userDetails.userCategory = new UserCategory();
  }

  ngOnInit() {
    this.userCategoryService.getUserCategories().subscribe(
      (categories) => {
        this.userCategories = categories;
      }
    );
  }

  submit(ngForm: NgForm) {
    console.log(this.user);
    this.user.userDetails.userCategory = this.userCategories.find((category => {
      if (category.id === this.user.userDetails.userCategory.id) {
        return true;
      }
    }));
    
    this.userService.addUser(this.user).subscribe(
      (data) => {
        ngForm.reset();
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error.error);
        this.errorMessages = error.error;
      }
    );
  }

}
