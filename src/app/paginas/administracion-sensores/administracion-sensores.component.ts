import { Component, OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { ModelosService, Permisos } from '../../servicios/modelos.service';
import { IpaService } from '../../servicios/ipa.service';
import { ServicesService } from '../../servicios/services.service';
import { SensorComponent } from '../../acciones/sensor/sensor.component';
declare var $: any;

@Component({
  selector: 'app-administracion-sensores',
  templateUrl: './administracion-sensores.component.html',
  styleUrls: ['./administracion-sensores.component.css']
})
export class AdministracionSensoresComponent implements OnInit {
  idVistaPortal = 2;
  permisos: Permisos[];
  @ViewChild(SensorComponent) sensor: SensorComponent;
  constructor(public auth: AuthService, public servicios: ServicesService, private IPA: IpaService, public modelos: ModelosService) {
    this.auth.activar('mAdmin', 'mAdministracionSensores', 'lAdmin');
    this.permisos = [];
   }

  ngOnInit(): void {
  }

  abrirPanelSensores(): void {
    this.sensor.abrirPanelSensor();
  }

}
