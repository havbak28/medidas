import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { AppConstants } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl: string = AppConstants.baseURL;
  perfil: any = {};

  constructor(private http: HttpClient) { }

  actualizarCatalogoConfiguracion(estructura) {
    return this.http.post(this.baseUrl + 'actualizarCatalogoConfiguracion', estructura);
  }

  catalogoConfiguracion(token, idUsuario, idVistaPortal) {
    return this.http.get(this.baseUrl + 'catalogoConfiguracion/' + token + '/' + idUsuario + '/' + idVistaPortal);
  }

  catalogoInicio(token, idUsuario, idVistaPortal) {
    return this.http.get(this.baseUrl + 'catalogoInicio/' + token + '/' + idUsuario + '/' + idVistaPortal);
  }

  logout(token, idUsuario) {
    return this.http.get(this.baseUrl + 'logout/' + token + '/' + idUsuario);
  }
}

