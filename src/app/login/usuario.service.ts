import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

listaUsuario: Usuario[]=[
  {
    nombre: 'Luis',
    apellido: 'Acevedo',
    usuario: 'lacevedo',
    password: '12345'
  },
  {
    nombre: 'Diego',
    apellido: 'Castaneda',
    usuario: 'dcastaned',
    password: '12345'
  },
];

  constructor() {     
  }

  obtenerUsuario(usuarioInput: string){
    return {
      ...this.listaUsuario.find(usuario => {return usuario.usuario == usuarioInput})
     }
  }

  agregarUsuario(nombre?: string, apellido?: string, usuario?: string, password?: string)
  {
    this.listaUsuario.push(
      {
        nombre,
        apellido,
        usuario,
        password
      }
    );
  }
  eliminarUsuario(usuarios: string)
  {
    this.listaUsuario = this.listaUsuario.filter(usuario => {return usuario.usuario !== usuarios});
  }
}
