import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registro-reserva',
  templateUrl: './registro-reserva.component.html',
  styleUrls: ['./registro-reserva.component.css']
})
export class RegistroReservaComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router) { }

  reserva = null;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.reserva = JSON.parse(params['dataReserva']);
      console.log(this.reserva);
    });
  }

  

}
