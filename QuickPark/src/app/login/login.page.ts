import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe((response: any) => {
      if (response && response.success) {
        console.log('Login exitoso');
        this.authService.setToken(response.token); // Guardamos el token en el servicio de autenticación
        this.router.navigateByUrl('/folder'); // Redirigimos al usuario a la página /folder
      } else {
        console.error('Login fallido');
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.'); // Mensaje de error si el login falla
      }
    }, (error) => {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.'); // Manejo de errores
    });
  }
}














