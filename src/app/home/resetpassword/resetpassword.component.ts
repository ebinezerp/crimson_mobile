import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent implements OnInit {

  code: string = '';
  email: string;
  constructor(
    private userService: UserService,
    private location: Location,
    private router: Router,
    private alertController: AlertController ) {
    this.email = this.userService.getLoginMail();
    if (this.email === undefined) {
       this.router.navigate(['/forget-password']).then(
         () => window.location.reload()
       );
    }
   }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Invalid Credentials',
      message: 'Enter Correct Code',
      buttons: ['OK'],
      cssClass: 'alertCss'
    });
    await alert.present();
  }

  submit() {
    this.userService.resetPassword(this.email, this.code).subscribe(
      (data) => {
        this.router.navigate(['/newpassword']);
      },
      (error) => {
        this.presentAlert();
      }
    );
  }


}
