import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../login/usuario.model';
import { UsuarioService } from '../login/usuario.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

usuario: string;

  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private alertCtrl: AlertController) { 
      this.usuario = '';
    }

  ngOnInit() {
  }

  usuarioServiceS!: Usuario;
  passwordActual!: string;
  campo!: string;

  recuperarPassword() {

    this.usuarioServiceS = this.usuarioService.obtenerUsuario(this.usuario);

    if (this.ValidacionDatos(this.usuario)) 
    {
      if(this.usuarioServiceS.usuario == this.usuario)
      {
        this.presentAlert('Bueno', 'Se han enviado las instrucciones al correo.');
        this.router.navigate(['/login'])
      }
      else
      {
        this.presentAlert('Error', 'El usuario no existe');
        this.usuario = '';
      }
    }
    else 
    {
      this.presentAlert('Error', 'Falta los datos: ' + this.campo);
    }
  }

  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  ValidacionDatos(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value === '') {
        this.campo = key;
        return false;
      }
    }
    return true;
  }

}
