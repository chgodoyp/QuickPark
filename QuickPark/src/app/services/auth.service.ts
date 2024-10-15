import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token?: string;
}

interface RegisterUser {
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterResponse {
  success: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = '';

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    if (credentials.email === 'usuario@ejemplo.com' && credentials.password === 'contraseña') {
      const resultado = { success: true, token: 'token-de-prueba' };
      return of(resultado);
    } else {
      return throwError({ error: 'Credenciales incorrectas' });
    }
  }

  register(newUser: RegisterUser): Observable<RegisterResponse> {
    if (!newUser.email || !newUser.password || !newUser.confirmPassword) {
      return of({ success: false, error: 'Faltan datos' });
    }

    if (newUser.password !== newUser.confirmPassword) {
      return of({ success: false, error: 'Las contraseñas no coinciden' });
    }

    const resultado = { success: true };
    return of(resultado);
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








