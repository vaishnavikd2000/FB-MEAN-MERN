import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SIgnInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'SignIn',
    component:SIgnInComponent
  },
  {
    path:'SignUp',
    component:SignUpComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
