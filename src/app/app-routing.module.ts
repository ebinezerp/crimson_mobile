import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SignupComponent } from './home/signup/signup.component';
import { ForgetPasswordComponent } from './home/forget-password/forget-password.component';
import { MainpageComponent } from './userhome/mainpage/mainpage.component';
import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component';
import { NewpasswordComponent } from './home/newpassword/newpassword.component';


const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'signup', component: SignupComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'userhome', loadChildren: './userhome/userhome.module#UserhomeModule'},
  { path: 'reset', component: ResetpasswordComponent},
  { path: 'newpassword', component: NewpasswordComponent}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
