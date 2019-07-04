import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, SignupComponent, ForgetPasswordComponent,
  ResetpasswordComponent, HomeheaderComponent, NewpasswordComponent]
})
export class HomePageModule {}
