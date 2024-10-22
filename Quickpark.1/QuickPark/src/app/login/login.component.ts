// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) { }

  login() {
    // Aquí va la lógica para autenticar al usuario
    // Por ahora, solo redirigimos al home
    this.router.navigate(['/home']);
  }

  register() {
    this.router.navigate(['/register']);
  }
}