import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { ModelosService, Permisos } from '../../servicios/modelos.service';
import { IpaService } from '../../servicios/ipa.service';
import { ServicesService } from '../../servicios/services.service';
import { ProcesarArchivoComponent } from '../../acciones/procesar-archivo/procesar-archivo.component';
declare var $: any;

@Component({
  selector: 'app-administracion-archivos',
  templateUrl: './administracion-archivos.component.html',
  styleUrls: ['./administracion-archivos.component.css']
})
export class AdministracionArchivosComponent implements OnInit {
  idVistaPortal = 2;
  permisos: Permisos[];
  @ViewChild(ProcesarArchivoComponent) procesarDatos: ProcesarArchivoComponent;
  constructor(public auth: AuthService, public servicios: ServicesService, private IPA: IpaService, public modelos: ModelosService) {
    this.auth.activar('mAdministracionArchivos', '', '');
    this.permisos = [];
   }

  ngOnInit(): void {
  }

  obtenerPermiso(id){
    let permiso = false;
    if (this.permisos.length > 0){
    const item = this.permisos.find(i => i.idPermiso === id);
    permiso = item.estatusPermisoTipoUsuario;
    }
    return permiso;
  }

  abrirPanelProcesarDatos() {
    this.procesarDatos.abrirPanelProcesarDatos();
  }
}
