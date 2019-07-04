import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {

  email: string;

  constructor(
    private userService: UserService,
    private alertController: AlertController,
    private router: Router,
    private location: Location) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Invalid Email',
      message: 'Enter Registered Email',
      buttons: ['OK'],
      cssClass: 'alertCss'
    });
    await alert.present();
  }


  submit() {
    this.userService.verifyEmail(this.email).subscribe(
      (data) => {
        if (data === true) {
          this.userService.setLoginMail(this.email);
          this.router.navigate(['/reset']);
        } else {
          this.presentAlert();
        }
      },
      (error) => {
        this.presentAlert();
      }
    );
  }


  back(): void {
    this.location.back();
  }

}
