import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-procesar-archivo',
  templateUrl: './procesar-archivo.component.html',
  styleUrls: ['./procesar-archivo.component.css']
})
export class ProcesarArchivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirPanelProcesarDatos(): void {
    $('#panelProcesarDatos').modal('show');
  }

  cerrarPanelProcesarDatos(): void {
    $('#panelProcesarDatos').modal('hide');
  }

}
