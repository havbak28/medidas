import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public abrirPanelSensor(): void{
    $('#panelSensor').modal();
  }

}
