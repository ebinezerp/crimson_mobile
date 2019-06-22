import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { SignupService } from '../services/signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  user: User;
  role = 'ROLE_USER';
  errorMessages = {};

  constructor(private signupService: SignupService, private router: Router ) {
    this.user = new User();
  }

  ngOnInit() {}

  submit() {
    this.signupService.addUser(this.user).subscribe(
      (data) => {
        this.user = new User();
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error.error);
        this.errorMessages = error.error;
      }
    );
  }

}
