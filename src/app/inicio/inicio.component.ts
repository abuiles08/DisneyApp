import { Component, OnInit } from '@angular/core';
import {SeguridadService} from './seguridad.service';
import {Router} from '@angular/router'
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import {FormsModule} from "@angular/forms"



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  dias : number;
  adultos : number;
  demonios : number;

  token = null;
  constructor(private SeguridadService : SeguridadService, private router : Router) {
    this.SeguridadService.getDataToken().subscribe( data => {
      this.token = data
    });
   }

  planes = null;

  buscar(){
  this.SeguridadService.getDataPlanes(this.dias, this.adultos, this.demonios, this.token).subscribe( data =>{
        this.planes = data; 
        this.router.navigate(['/buscar-planes'], { queryParams : { dataPlan : JSON.stringify(this.planes)} });
    });
    return;
  }

  ngOnInit() {
  }

}
