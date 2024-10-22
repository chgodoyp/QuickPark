// register.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string | undefined;
  rut: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  password: string | undefined;

  constructor(private router: Router) { }

  createAccount() {
    // Aquí va la lóg
  }
  }
