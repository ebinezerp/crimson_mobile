import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss'],
})
export class MainmenuComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router ) {
    console.log('main menu const');
  }

  ngOnInit() {
    if (this.userService.getUser() != null) {
      this.user = this.userService.getUser();
    } else {
       this.router.navigate(['/']).then(
        () =>  window.location.reload()
       );
    }
  }

  ngOnDestory() {
  }

  logout() {
    this.router.navigate(['/']).then(
      () => {
        if (localStorage.getItem('user') != null) {
          localStorage.removeItem('user');
        }
        window.location.reload();
      }
    );

  }

}
