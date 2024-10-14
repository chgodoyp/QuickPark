import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(128)
      ]),
      confirmPassword: new FormControl<string>('', [
        Validators.required,
        this.matchPasswordValidator('password')
      ]),
      fullName: new FormControl<string>('', [Validators.required]),
      rut: new FormControl<string>('', [Validators.required]),
      alternateEmail: new FormControl<string>('', [Validators.required]),
      phoneNumber: new FormControl<string>('', [Validators.required])
    });
  }

  matchPasswordValidator(passwordFormControlName: string): ValidatorFn {
    return (control: AbstractControl) => {
      const passwordFormControl = this.registerForm.get(passwordFormControlName);
      if (passwordFormControl && passwordFormControl.value !== control.value) {
        return { mismatch: true };
      }
      return null;
    };
  }

  register() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.authService.register(userData).subscribe((response: { success: boolean }) => {
        if (response.success) {
          this.router.navigateByUrl('/login');
        } else {
          console.error('Error al registrar el usuario:', response);
        }
      });
    } else {
      console.error('Datos del formulario inválidos:', this.registerForm.errors);
    }
  }
}












