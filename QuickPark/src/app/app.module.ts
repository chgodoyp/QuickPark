import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './login/login.module';  // Si lo necesitas
import { RegisterPageModule } from './register/register.module';  // Si lo necesitas
import { FolderPageModule } from './folder/folder.module';  // Si lo necesitas

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // Estos módulos son solo necesarios si no utilizas lazy loading
    // Si usas lazy loading, no es necesario incluirlos aquí
    LoginPageModule,        
    RegisterPageModule,     
    FolderPageModule        
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}








