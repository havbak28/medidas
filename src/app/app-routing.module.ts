import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './servicios/auth-guard.service';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { AdministracionArchivosComponent } from './paginas/administracion-archivos/administracion-archivos.component';
import { AdministracionSensoresComponent } from './paginas/administracion-sensores/administracion-sensores.component';
import { ReportesComponent } from './paginas/reportes/reportes.component';
import { AdministracionReportesComponent } from './paginas/administracion-reportes/administracion-reportes.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, data: {requiresLogin: false}, canActivate: [ AuthGuardService ]},
    { path: 'inicio', component: InicioComponent, data: {requiresLogin: true}, canActivate: [ AuthGuardService ]},
    { path: 'administracion-archivos', component: AdministracionArchivosComponent, data: {requiresLogin: true}, canActivate: [ AuthGuardService ]},
    { path: 'administracion-sensores', component: AdministracionSensoresComponent, data: {requiresLogin: true}, canActivate: [ AuthGuardService ]},
    { path: 'reportes', component: ReportesComponent, data: {requiresLogin: true}, canActivate: [ AuthGuardService ]},
    { path: 'administracion-reportes', component: AdministracionReportesComponent, data: {requiresLogin: true}, canActivate: [ AuthGuardService ]},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes, {useHash: false } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

