import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user ={
    usuario:'',
    password:''
  };

  usuarioServiceS!: Usuario;
  campo!: string;

  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private alertCtrl: AlertController) { 
    this.user.usuario = '';
    this.user.password = '';
    }
  
  ngOnInit() {
  }

  IniciarSesion() {
    
    if(this.ValidacionDatos(this.user))
    {
      this.usuarioServiceS = this.usuarioService.obtenerUsuario(this.user.usuario);

      if ( this.usuarioServiceS.usuario == this.user.usuario && this.usuarioServiceS.password == this.user.password) 
      {

        let navigationExtras: NavigationExtras = {
          state: {
            user: this.user
          }
        };

        this.router.navigate(['/inicio'], navigationExtras);
      }
      else 
      {
        this.presentAlert('Error', 'Usuario o contraseña incorrectos');
      }
    }
    else
    {
      this.presentAlert('Error', 'Ingrese usuario y contraseña');
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
