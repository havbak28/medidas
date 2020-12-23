import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { ModelosService, Permisos } from '../../servicios/modelos.service';
import { IpaService } from '../../servicios/ipa.service';
import { ServicesService } from '../../servicios/services.service';
declare var $: any;

@Component({
  selector: 'app-administracion-reportes',
  templateUrl: './administracion-reportes.component.html',
  styleUrls: ['./administracion-reportes.component.css']
})
export class AdministracionReportesComponent implements OnInit {
  idVistaPortal = 3;
  permisos: Permisos[];
  constructor(public auth: AuthService, public servicios: ServicesService, private IPA: IpaService, public modelos: ModelosService) {
    this.auth.activar('mAdmin', 'mAdministracionReportes', 'lAdmin');
    this.permisos = [];
   }

  ngOnInit(): void {
  }

  crearReporte(): void {

  }

}
