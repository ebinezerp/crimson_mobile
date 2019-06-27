import {
  Component, EventEmitter
} from '@angular/core';
import {
  UserService
} from './services/user.service';
import { AlertController } from '@ionic/angular';
import { async } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = '';
  password = '';

  eventEmitter = new EventEmitter<any>();

  constructor(
    private userService: UserService,
    private router: Router,
    public alertController: AlertController) {
    }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Invalid Credentials',
      message: 'Enter Valid Credentials',
      buttons: ['OK'],
      cssClass: 'alertCss'
    });
    await alert.present();
  }



  submit() {
    console.log(this.email, this.password);
    this.userService.login(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
        this.userService.setUser(data);
        this.router.navigate(['userhome/main']);
      },
      (error) => {
       console.log(error);
       this.presentAlert();
      }
    )
  }
}