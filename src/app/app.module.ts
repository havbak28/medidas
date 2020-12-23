import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './portal/footer/footer.component';
import { HeaderComponent } from './portal/header/header.component';
import { MenuComponent } from './portal/menu/menu.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { DirectivasDirective } from './directivas/directivas.directive';
import { ProcesarArchivoComponent } from './acciones/procesar-archivo/procesar-archivo.component';
import { AdministracionArchivosComponent } from './paginas/administracion-archivos/administracion-archivos.component';
import { AdministracionSensoresComponent } from './paginas/administracion-sensores/administracion-sensores.component';
import { SensorComponent } from './acciones/sensor/sensor.component';
import { ReportesComponent } from './paginas/reportes/reportes.component';
import { AdministracionReportesComponent } from './paginas/administracion-reportes/administracion-reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    InicioComponent,
    LoginComponent,
    DirectivasDirective,
    ProcesarArchivoComponent,
    AdministracionArchivosComponent,
    AdministracionSensoresComponent,
    SensorComponent,
    ReportesComponent,
    AdministracionReportesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
