import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss'],
})
export class NewpasswordComponent implements OnInit {

  password: string = '';
  confirmPassword: string = '';
  email: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertController: AlertController) {
    this.email = userService.getLoginMail();
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
      subHeader: 'Password Match',
      message: 'Password and Confirm Password Should be same',
      buttons: ['OK'],
      cssClass: 'alertCss'
    });
    await alert.present();
  }

  submit(): void {
    if (this.password !== this.confirmPassword) {
      this.presentAlert();
    }
    this.userService.setNewPassword(this.email, this.password).subscribe(
      (data) => {
        this.router.navigate(['/']).then(
          () => window.location.reload()
        );
      },
      (error) => {
        this.router.navigate(['/forget-password']).then(
          () => window.location.reload()
        );
      }
    );
  }
}
