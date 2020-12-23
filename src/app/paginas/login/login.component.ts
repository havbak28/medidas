import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { IpaService } from '../../servicios/ipa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any = {};
  constructor(public authService: AuthService, private IPA: IpaService) {
   this.usuario.username = '';
   this.usuario.password = '';
  }

  ngOnInit() {
    this.authService.usuarioLogueado.idUsuario  = null;
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('sidebar-mini');
    body.classList.add('hold-transition');
    body.classList.add('login-page');
    const div = document.getElementById('divContenedor');
    div.classList.remove('wrapper');
    div.classList.add('login-box');
  }

  login() {
    let bError = false;
    if (!bError && this.IPA.validaCadena(this.usuario.username)) {
      bError = true;
      this.authService.mensajeError = 'No ha ingresado el Usuario';
    }
    if (!bError && this.IPA.validaCadena(this.usuario.password)) {
      bError = true;
      this.authService.mensajeError = 'No ha ingresado el Password';
    }
    if (!bError) {
    this.authService.login(this.usuario);
    }
  }

}
