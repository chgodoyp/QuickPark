import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, LoginPageRoutingModule],
  declarations: [LoginPage],
  exports: [LoginPage]
})
export class LoginPageModule {}