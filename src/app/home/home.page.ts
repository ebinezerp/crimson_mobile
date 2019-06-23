import {
  Component, EventEmitter
} from '@angular/core';
import {
  UserService
} from './services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = '';
  password = '';

  eventEmitter = new EventEmitter<any>();

  constructor(private userService: UserService, public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }


  submit() {
    console.log(this.email, this.password);
    this.userService.login(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        if (error.status === '406') {
          
        }
      }
    )
  }
}