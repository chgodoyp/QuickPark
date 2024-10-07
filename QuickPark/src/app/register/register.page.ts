import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombreCompleto: string = '';
  rut: string = '';
  correoElectronico: string = '';
  numeroTelefonico: string = '';
  contrasena: string = '';

  constructor() {}

  onRegister() {
    console.log('Registro:', this.nombreCompleto, this.rut, this.correoElectronico, this.numeroTelefonico, this.contrasena);
  }
}





