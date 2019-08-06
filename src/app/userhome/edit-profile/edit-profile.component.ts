import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { UserCategory } from 'src/app/model/user-category';
import { UserCategoryService } from 'src/app/services/user-category.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  user: User;
  errorMessages = {};
  userCategories: UserCategory[];

  constructor(
    private userService: UserService,
    private userCategoryService: UserCategoryService,
    private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.user = this.userService.getUser();
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

    console.log(this.user);

    this.userService.updateUser(this.user).subscribe(
      (data) => {
        this.user = data;
        this.userService.setUser(data);
        this.router.navigate(['/userhome/profile']);
      },
      (error) => {
        console.log(error.error);
        this.errorMessages = error.error;
      }
    );
  }

}
