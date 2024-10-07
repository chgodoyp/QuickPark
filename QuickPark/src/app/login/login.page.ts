import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Inicializa el campo de correo electrónico
  password: string = ''; // Inicializa el campo de contraseña

  constructor(private router: Router) {}

  // Método para manejar el inicio de sesión
  onLogin() {
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Login', this.email, this.password);
    
    // Aquí puedes implementar la lógica de autenticación
    // Si el inicio de sesión es exitoso, puedes navegar a otra página
    this.router.navigate(['/home']); // Descomenta esto para redirigir
  }

  // Método para navegar a la página de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}







