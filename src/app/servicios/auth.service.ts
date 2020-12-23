import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  AppConstants
} from '../constantes';
import {
  Router
} from '@angular/router';
import {
  ServicesService
} from '../servicios/services.service';
import { Credenciales, ModelosService, UsuarioLogueado, Permisos, MensajesSistema } from './modelos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = AppConstants.baseURL;
  usuarioLogueado: UsuarioLogueado;
  permisosMenu: Permisos[];
  mensajesSistema: MensajesSistema[];
  datosUsuario: any = {};
  mensajeError = '';
  cargando = false;
  mInicio = 'nav-link';
  mAdmin = 'nav-link';
  lAdmin = 'nav-item has-treeview';
  mSuperAdmin = 'nav-link';
  lSuperAdmin = 'nav-item has-treeview';
  mConfiguracion = 'nav-link';
  mUsuarios = 'nav-link';
  mAdministracionArchivos = 'nav-link';
  mAdministracionSensores = 'nav-link';
  mAdministracionReportes = 'nav-link';
  mReportes = 'nav-link';

  constructor(private http: HttpClient, private router: Router, public servicios: ServicesService, public modelos: ModelosService) {
    this.usuarioLogueado = new UsuarioLogueado();
  }

  isAuthenticated(): any {
    if (this.usuarioLogueado.idUsuario == null) {
      return false;
    } else {
      return true;
    }
  }

  login(usuario): any {
    this.mensajeError = '';
    this.cargando = true;
    this.datosUsuario.login = usuario.username;
    this.datosUsuario.password = JSON.parse(JSON.stringify(usuario.password));

    // Harcodeo de Inicio de sesión
    this.mensajeError = '';
    this.usuarioLogueado = this.modelos.usuarioLogueado({
      idUsuario: 1,
      bname: this.datosUsuario.login,
      numeroEmpleado: '11254',
      nombreUsuario: 'María Elena',
      apellidoPaterno: 'Acevedo',
      apellidoMaterno: 'Valle',
      email: 'havbak@hotmail.com',
      idTipoUsuario: 1,
      nombreTipoUsuario: 'SUPER ADMINISTRADOR',
      fotoUsuario: '',
      rutaFotoUsuario: 'https://www.smig.org.mx/images/capitulos-estudiantiles-smig/unam-facultad-ingenieria-posgrado-smig/acevedo-valle-maria-elena-posgrado-instituto-ingenieria-unam-smig.jpg',
      token: '25354-58451-58544-56987'
    });
    this.permisosMenu = this.modelos.permisos([{
      idPermiso: 1,
      idVistaPortal: 1,
      nombrePermiso: 'PERMISO 1',
      descripcionPermiso: 'PERMISO 1',
      mostrarPermiso: true,
      ordenMostrarPermiso: 1,
      estatusPermiso: true,
      estatusPermisoTipoUsuario: true
    }]);
    this.mensajesSistema = this.modelos.mensajesSistema([{
      idMensajeSistema: 'FE2',
      idTipoMensajeSistema: 1,
      mensajeSistema: 'Mensaje 1',
      descripcionMensajeSistema: 'Mensaje 1',
      idUsuarioUltimaActualizacion: 1,
      fechaUltimaActualizacion: '',
      idNivelSistema: 1,
      mostrarMensajeSistema: true
    }]);
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.add('hold-transition');
    body.classList.add('skin-black-light');
    body.classList.add('sidebar-mini');
    body.classList.add('max');
    const div = document.getElementById('divContenedor');
    div.classList.remove('login-box');
    div.classList.add('wrapper');
    this.router.navigate(['/inicio']);

    /*
    this.http.post(this.baseUrl + 'login', this.datosUsuario)
      .subscribe(
        (data) => {
          this.cargando = false;
          if (data['error']) {
            this.mensajeError = data['codigoError'] + ' - ' + data['descripcionError'];
          } else {
            this.mensajeError = '';
            this.usuarioLogueado = this.modelos.usuarioLogueado(data['resultado']['login']);
            this.permisosMenu = this.modelos.permisos(data['resultado']['permisosSistema']);
            this.mensajesSistema = this.modelos.mensajesSistema(data['resultado']['mensajesSistema']);
            this.usuarioLogueado = data['resultado']['login'];
            const body = document.getElementsByTagName('body')[0];
            body.classList.remove('login-page');
            body.classList.add('hold-transition');
            body.classList.add('skin-black-light');
            body.classList.add('sidebar-mini');
            body.classList.add('max');
            const div = document.getElementById('divContenedor');
            div.classList.remove('login-box');
            div.classList.add('wrapper');
            this.router.navigate(['/inicio']);
          }
        },
        (error) => {
          this.usuarioLogueado.idUsuario = null;
          this.cargando = false;
          this.mensajeError = 'No se ha podido establecer conexión con el proveedor de servicios.';
        }
      );
      */
  }

  logout(): any{
    this.servicios.logout(this.usuarioLogueado.token, this.usuarioLogueado.idUsuario).subscribe(
        (data) => {
          if (data['error']) {
            // error
          } else {
            // correcto
          }
        },
        (error) => {
          //  this.IPA.mensajeNoConexion();
        }
      );
    this.usuarioLogueado.idUsuario = null;
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('skin-black-light');
    body.classList.remove('sidebar-mini');
    body.classList.add('hold-transition');
    body.classList.add('login-page');
    const div = document.getElementById('divContenedor');
    div.classList.remove('wrapper');
    div.classList.add('login-box');
    this.router.navigate(['/login']);
  }

  activar = function(menu, submenu, lista): any {
    this.mInicio = 'nav-link';
    this.mAdmin = 'nav-link';
    this.lAdmin = 'nav-item has-treeview';
    this.mSuperAdmin = 'nav-link';
    this.lSuperAdmin = 'nav-item has-treeview';
    this.mConfiguracion = 'nav-link';
    this.mUsuarios = 'nav-link';
    this.mAdministracionArchivos = 'nav-link';
    this.mAdministracionSensores = 'nav-link';
    this.mAdministracionReportes = 'nav-link';
    this.mReportes = 'nav-link';
    this[menu] = 'nav-link active';
    this[submenu] = 'nav-link active';
    this[lista] = 'nav-item has-treeview menu-open';
  };

  obtenerPermiso(id): any{
    let permiso = false;
    if (this.permisosMenu.length > 0){
    const item = this.permisosMenu.find(i => i.idPermiso === id);
    permiso = item.estatusPermisoTipoUsuario;
    }
    return permiso;
  }

  obtenerCredenciales(idVista): any {
    const credenciales: any = {};
    credenciales.idVistaPortal = idVista;
    credenciales.idUsuario = this.usuarioLogueado.idUsuario;
    credenciales.token = this.usuarioLogueado.token;
    return credenciales;
  }

}
