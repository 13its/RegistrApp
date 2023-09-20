import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

import { RecuperarContrasenaPageRoutingModule } from './recuperar-contrasena-routing.module';

import { RecuperarContrasenaPage } from './recuperar-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarContrasenaPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [RecuperarContrasenaPage]
})
export class RecuperarContrasenaPageModule {}
