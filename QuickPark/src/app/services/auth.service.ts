import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = '';

  login(credentials: { email: string; password: string }): Observable<any> {
    // Aquí deberías hacer una llamada a tu API de autenticación
    // Simulación de validación
    if (credentials.email === 'usuario@ejemplo.com' && credentials.password === 'contraseña') {
      const resultado = { success: true, token: 'token-de-prueba' };
      return of(resultado);
    } else {
      const resultado = { success: false };
      return of(resultado);
    }
  }

  register(newUser: { email: string; password: string; confirmPassword: string }): Observable<any> {
    // Simulación de registro
    const resultado = { success: true };
    return of(resultado); // Devuelve un Observable con el resultado
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  logout(): void {
    this.token = '';
    console.log('Sesión cerrada');
  }
}








