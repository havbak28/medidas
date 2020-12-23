import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { ModelosService, Permisos } from '../../servicios/modelos.service';
import { IpaService } from '../../servicios/ipa.service';
import { ServicesService } from '../../servicios/services.service';
declare var $: any;
declare var Highcharts: any;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  idVistaPortal = 4;
  modo = 'LISTADO';
  permisos: Permisos[];

  constructor(public auth: AuthService, public servicios: ServicesService, private IPA: IpaService, public modelos: ModelosService) {
    this.auth.activar('mReportes', '', '');
    this.permisos = [];
   }

  ngOnInit(): void {
    Highcharts.chart('container', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Browser market shares in January, 2018'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'Internet Explorer',
              y: 11.84
          }, {
              name: 'Firefox',
              y: 10.85
          }, {
              name: 'Edge',
              y: 4.67
          }, {
              name: 'Safari',
              y: 4.18
          }, {
              name: 'Sogou Explorer',
              y: 1.64
          }, {
              name: 'Opera',
              y: 1.6
          }, {
              name: 'QQ',
              y: 1.2
          }, {
              name: 'Other',
              y: 2.61
          }]
      }]
  });
  }

  abrirReporte(idReporte: number): void {
    this.modo = 'DETALLE';
  }

  regresar() {
    this.modo = 'LISTADO';
  }

}
