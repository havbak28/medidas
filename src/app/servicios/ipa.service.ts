import {
  Injectable
} from '@angular/core';
import Swal from 'sweetalert2';
import {
  AuthService
} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class IpaService {

  constructor(public auth: AuthService) {}

  addZero(i): string {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  cerrarMensaje(): any {
    let mensaje;
    mensaje = Swal.close();
    return mensaje;
  }

  hoy(): string {
    const today = new Date();
    let today1 = '';
    const dd = today.getDate();
    const mm = today.getMonth() + 1; // January is 0!
    const yyyy = today.getFullYear();
    today1 = this.addZero(dd) + '/' + this.addZero(mm) + '/' + yyyy;

    return today1;
  }

  mensajeCargando(tipoMensaje): any {
    let titulo;
    let mostrarPop;
    let ocultarPop;
    let imagen;
    let item;
    if (tipoMensaje === 4) {
      titulo = 'Cargando';
      mostrarPop = 'animate__animated animate__bounceIn';
      ocultarPop = 'animate__animated animate__bounceOut';
      imagen = 'assets/img/animat-clock.gif';
      item = this.auth.mensajesSistema.find(i => i.idMensajeSistema === 'FE2');
    }

    if (tipoMensaje === 5) {
      titulo = 'Guardando';
      mostrarPop = 'animate__animated animate__flipInX';
      ocultarPop = 'animate__animated animate__flipOutY';
      imagen = 'assets/img/animat-clock.gif';
      item = this.auth.mensajesSistema.find(i => i.idMensajeSistema === 'FE3');
    }

    let mensaje = {};
    mensaje = Swal.fire({
      title: titulo,
      text: item.mensajeSistema + ' (' + item.idMensajeSistema + ')',
      imageUrl: imagen,
      imageWidth: 200,
      imageHeight: 200,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      imageAlt: 'Custom image',
      showClass: {
        popup: mostrarPop
      },
      hideClass: {
        popup: ocultarPop
      }
    });
    return mensaje;
  }

  mensajeError(codigoError, tipoError, descripcionError): any {
    let titulo;
    let icono;
    let mostrarPop;
    let mostrarIcono;
    let ocultarPop;

    switch (tipoError) {
      case 1: {
        titulo = 'Error';
        icono = 'error';
        mostrarPop = 'animate__animated animate__pulse';
        mostrarIcono = 'animate__animated animate__heartBeat animate__delay-1s';
        ocultarPop = 'animate__animated animate__fadeOutUp';
        break;
      }
      case 2: {
        titulo = 'Advertencia';
        icono = 'warning';
        mostrarPop = 'animate__animated animate__heartBeat';
        mostrarIcono = 'animate__animated animate__heartBeat animate__delay-1s';
        ocultarPop = 'animate__animated animate__fadeOutUp';
        break;
      }
    }

    let mensaje = {};
    mensaje = Swal.fire({
      title: titulo,
      icon: icono,
      text: descripcionError + ' (' + codigoError + ')',
      showClass: {
        popup: mostrarPop,
        icon: mostrarIcono
      },
      hideClass: {
        popup: ocultarPop
      }
    });
    if (codigoError === 'BD9' || codigoError === 'BD10') {
      this.auth.logout();
    }
    return mensaje;
  }

  mensajeExito(codigoError): any {
    let titulo;
    let icono;
    let mostrarPop;
    let mostrarIcono;
    let ocultarPop;
    let item;

    titulo = 'Correcto';
    icono = 'success';
    mostrarPop = 'animate__animated animate__fadeInDown';
    mostrarIcono = 'animate__animated animate__heartBeat animate__delay-1s';
    ocultarPop = 'animate__animated animate__fadeOutUp';

    item = this.auth.mensajesSistema.find(i => i.idMensajeSistema === codigoError);

    let mensaje = {};
    mensaje = Swal.fire({
      title: titulo,
      icon: icono,
      text: item.mensajeSistema + ' (' + item.idMensajeSistema + ')',
      showClass: {
        popup: mostrarPop,
        icon: mostrarIcono
      },
      hideClass: {
        popup: ocultarPop
      }
    });
    return mensaje;
  }

  mensajeNoConexion(): any {
    const item = this.auth.mensajesSistema.find(i => i.idMensajeSistema === 'FE1');
    let mensaje = {};
    mensaje = Swal.fire({
      title: 'Error',
      icon: 'error',
      text: item.mensajeSistema + ' (' + item.idMensajeSistema + ')'
    });
    return mensaje;
  }

  validaCadena(cadena): any {
    if (!cadena) {
      return true;
    }
    if (!cadena.trim()) {
      return true;
    }
    return false;
  }

  validaCantidad(cadena): any {
    if (!cadena) {
      return true;
    }
    if (isNaN(cadena)) {
      return true;
    }

    if (cadena <= 0) {
      return true;
    }
    return false;
  }

}
