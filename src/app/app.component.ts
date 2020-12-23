import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AuthService } from './servicios/auth.service';
import { IpaService } from './servicios/ipa.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'medidas';
  constructor(public swUpdate: SwUpdate, public auth: AuthService, public IPA: IpaService) {
    this.swUpdate.available.subscribe(evt => {
      // an update is available, add some logic here.
    });
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        alert('Versión del portal actualizado al: ' + this.IPA.hoy() );
        window.location.reload();
      });
      this.swUpdate.activated.subscribe(() => {
        console.log('Se activa actualización' +  this.IPA.hoy());
      });
    }
  }
}
