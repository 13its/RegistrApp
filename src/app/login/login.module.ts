import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
