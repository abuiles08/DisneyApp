import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaPlanesComponent } from './lista-planes/lista-planes.component';
import { RegistroReservaComponent } from './registro-reserva/registro-reserva.component';
import {SeguridadService} from './inicio/seguridad.service';



const disneyRuta : Routes = [
  {path: '', component : InicioComponent},
  {path: 'buscar-planes', component : ListaPlanesComponent },
  {path: 'registro-reserva', component : RegistroReservaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaPlanesComponent,
    RegistroReservaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(disneyRuta)
  ],
  providers: [SeguridadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
