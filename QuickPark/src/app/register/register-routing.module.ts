import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component'; // Cambia RegisterPage a RegisterComponent

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent // Asegúrate de que aquí también sea RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

