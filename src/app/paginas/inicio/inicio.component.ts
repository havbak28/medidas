import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { ModelosService, Permisos } from '../../servicios/modelos.service';
import { IpaService } from '../../servicios/ipa.service';
import { ServicesService } from '../../servicios/services.service';
import { ProcesarArchivoComponent } from '../../acciones/procesar-archivo/procesar-archivo.component';
import { SensorComponent } from '../../acciones/sensor/sensor.component';
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  idVistaPortal = 1;
  permisos: Permisos[];

  @ViewChild(ProcesarArchivoComponent) procesarDatos: ProcesarArchivoComponent;
  @ViewChild(SensorComponent) sensor: SensorComponent;
  constructor(public auth: AuthService, public servicios: ServicesService, private IPA: IpaService, public modelos: ModelosService, private router: Router) {
    this.auth.activar('mInicio', '', '');
    this.permisos = [];
   }

  obtenerPermiso(id){
    let permiso = false;
    if (this.permisos.length > 0){
    const item = this.permisos.find(i => i.idPermiso === id);
    permiso = item.estatusPermisoTipoUsuario;
    }
    return permiso;
  }

  ngOnInit(): void {
    $(document).ready(() => {
      $('body').Layout();
      $('[data-widget="treeview"]').Treeview('init');
    });
    this.catalogoInicio();
  }

  catalogoInicio(){
    /*
    this.IPA.mensajeCargando(4);
    this.servicios.catalogoInicio(this.auth.usuarioLogueado.token, this.auth.usuarioLogueado.idUsuario, this.idVistaPortal)
      .subscribe(
        (data) => {
          if (data['error']) {
            this.IPA.mensajeError(data['codigoError'], data['tipoError'], data['descripcionError']);
          } else {
            this.permisos = this.modelos.permisos(data['resultado']);
            this.IPA.cerrarMensaje();
          }
        },
        (error) => {
          this.IPA.mensajeNoConexion();
        }
      );
    */
  }

  abrirPanelProcesarDatos(): void {
    this.procesarDatos.abrirPanelProcesarDatos();
  }

  abrirAdministracionArchivos(): void {
    this.router.navigate(['/administracion-archivos']);
  }

  abrirPanelSensores(): void {
    this.sensor.abrirPanelSensor();
  }

  abrirAdministracionSensores(): void {
    this.router.navigate(['/administracion-sensores']);
  }

  abrirAdministracionReportes(): void {
    this.router.navigate(['/administracion-reportes']);
  }

  abrirReportes(): void {
    this.router.navigate(['/reportes']);
  }

}

