import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Plan} from '../inicio/Plan';
import {RegistroService} from './registro.service';
import {SeguridadService} from '../inicio/seguridad.service';
import {Reserva} from './Reserva'

@Component({
  selector: 'app-lista-planes',
  templateUrl: './lista-planes.component.html',
  styleUrls: ['./lista-planes.component.css']
})
export class ListaPlanesComponent implements OnInit {

  token = null;
  constructor(private route : ActivatedRoute, private router : Router, private SeguridadService : SeguridadService, private RegistroService : RegistroService) { 
    this.SeguridadService.getDataToken().subscribe( data => {
      this.token = data
    });

  }
  titulo = "esto es una prueba";
  planes : Plan;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.planes = JSON.parse(params['dataPlan']);
      console.log(this.planes);
    });
  }

  reserva: Reserva = null;
  buscar(){
      console.log("estes es el token"+ this.token);
      this.RegistroService.getConfirmacionReserva( this.token).subscribe( data =>{
          this.reserva = data; 
          this.router.navigate(['/registro-reserva'], { queryParams : { dataReserva : JSON.stringify(this.reserva)} });
      });
      return;
    }

}
