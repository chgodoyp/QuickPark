import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Add this line
    IonicModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class RegisterPageModule {}

