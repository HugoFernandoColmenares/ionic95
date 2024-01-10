import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginInputComponent,
    LogoComponent,
    UpdateUserComponent
  ],
  exports: [
    HeaderComponent,
    LoginInputComponent,
    LogoComponent,
    UpdateUserComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
