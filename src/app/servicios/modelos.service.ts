import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  constructor() {
    const usuariolog = new UsuarioLogueado();
  }

  usuarioLogueado(usuario): UsuarioLogueado {
    const usuarioLogueado = new UsuarioLogueado();
    usuarioLogueado.idUsuario = usuario.idUsuario;
    usuarioLogueado.bname = usuario.bname;
    usuarioLogueado.numeroEmpleado = usuario.numeroEmpleado;
    usuarioLogueado.nombreUsuario = usuario.nombreUsuario;
    usuarioLogueado.apellidoPaterno = usuario.apellidoPaterno;
    usuarioLogueado.apellidoMaterno = usuario.apellidoMaterno;
    usuarioLogueado.email = usuario.email;
    usuarioLogueado.idTipoUsuario = usuario.idTipoUsuario;
    usuarioLogueado.nombreTipoUsuario = usuario.nombreTipoUsuario;
    usuarioLogueado.fotoUsuario = usuario.fotoUsuario;
    usuarioLogueado.rutaFotoUsuario = usuario.rutaFotoUsuario;
    usuarioLogueado.token = usuario.token;
    return usuarioLogueado;
  }

  permisos(per): Permisos[] {
    const permisos = [];
    if (per.length > 0) {
      let i;
      for (i = 0; i < per.length; i++) {
        permisos.push({
          idPermiso: per[i].idPermiso,
          idVistaPortal: per[i].idVistaPortal,
          nombrePermiso: per[i].nombrePermiso,
          descripcionPermiso: per[i].descripcionPermiso,
          mostrarPermiso: per[i].mostrarPermiso,
          ordenMostrarPermiso: per[i].ordenMostrarPermiso,
          estatusPermiso: per[i].estatusPermiso,
          estatusPermisoTipoUsuario: per[i].estatusPermisoTipoUsuario
        });
      }
    }
    return permisos;
  }

  mensajesSistema(mensajes): MensajesSistema[] {
    const mensajesSistema = [];
    if (mensajes.length > 0) {
      let i;
      for (i = 0; i < mensajes.length; i++) {
        mensajesSistema.push({
          idMensajeSistema: mensajes[i].idMensajeSistema,
          idTipoMensajeSistema: mensajes[i].idTipoMensajeSistema,
          mensajeSistema: mensajes[i].mensajeSistema,
          descripcionMensajeSistema: mensajes[i].descripcionMensajeSistema,
          idUsuarioUltimaActualizacion: mensajes[i].idUsuarioUltimaActualizacion,
          fechaUltimaActualizacion: mensajes[i].fechaUltimaActualizacion,
          idNivelSistema: mensajes[i].idNivelSistema,
          mostrarMensajeSistema: mensajes[i].mostrarMensajeSistema
        });
      }
    }
    return mensajesSistema;
  }

  configuracionSistema(configuracion): ConfiguracionSistema[] {
    const configuracionSistema = [];
    if (configuracion.length > 0) {
      let i;
      for (i = 0; i < configuracion.length; i++) {
        configuracionSistema.push({
          idConfiguracion: configuracion[i].idConfiguracion,
          idTipoConfiguracion: configuracion[i].idTipoConfiguracion,
          nombreConfiguracion: configuracion[i].nombreConfiguracion,
          descripcionConfiguracion: configuracion[i].descripcionConfiguracion,
          valorConfiguracion: configuracion[i].valorConfiguracion,
          idUsuarioUltimaActualizacion: configuracion[i].idUsuarioUltimaActualizacion,
          fechaUltimaActualizacion: configuracion[i].fechaUltimaActualizacion,
          mostrarConfiguracion: configuracion[i].mostrarConfiguracion,
          estatusConfiguracion: configuracion[i].estatusConfiguracion,
          ordenMostrarConfiguracion: configuracion[i].ordenMostrarConfiguracion
        });
      }
    }
    return configuracionSistema;
  }

  parametrosConfiguracion(parametros, credenciales): ParametrosConfiguracion[] {
    const estructura: any = {};
    estructura.credenciales = credenciales;
    estructura.parametrosConfiguracion = [];
    if (parametros.length > 0) {
      let i;
      for (i = 0; i < parametros.length; i++) {
        estructura.parametrosConfiguracion.push({
          idConfiguracion: parametros[i].idConfiguracion,
          estatusConfiguracion: parametros[i].estatusConfiguracion,
          valorConfiguracion: parametros[i].valorConfiguracion
        });
      }
    }
    return estructura;
  }
}

export class UsuarioLogueado {
  idUsuario: number;
  bname: string;
  numeroEmpleado: string;
  nombreUsuario: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  email: string;
  idTipoUsuario: number;
  nombreTipoUsuario: string;
  fotoUsuario: string;
  rutaFotoUsuario: string;
  token: string;
}

export class Permisos {
  idPermiso: number;
  idVistaPortal: number;
  nombrePermiso: string;
  descripcionPermiso: string;
  mostrarPermiso: string;
  ordenMostrarPermiso: string;
  estatusPermiso: boolean;
  estatusPermisoTipoUsuario: boolean;
}

export class MensajesSistema {
  idMensajeSistema: string;
  idTipoMensajeSistema: number;
  mensajeSistema: string;
  descripcionMensajeSistema: string;
  idUsuarioUltimaActualizacion: number;
  fechaUltimaActualizacion: string;
  idNivelSistema: number;
  mostrarMensajeSistema: string;
}

export class ConfiguracionSistema {
  idConfiguracion: number;
  idTipoConfiguracion: number;
  nombreConfiguracion: string;
  descripcionConfiguracion: string;
  valorConfiguracion: string;
  idUsuarioUltimaActualizacion: number;
  fechaUltimaActualizacion: string;
  mostrarConfiguracion: boolean;
  estatusConfiguracion: boolean;
  ordenMostrarConfiguracion: number;
}

export class Credenciales {
  idVistaPortal: number;
  idUsuario: number;
  token: string;
}

export class ParametrosConfiguracion {
  idConfiguracion: number;
  estatusConfiguracion: boolean;
  valorConfiguracion: string;
}

export class EstructuraConfiguracion {
  credenciales: Credenciales;
  parametrosConfiguracion: ParametrosConfiguracion[];
}
