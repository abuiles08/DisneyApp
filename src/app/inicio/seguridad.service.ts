import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Plan} from './Plan'
import {Seguridad } from './Seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http : HttpClient) {
    console.log("Service is working");
  }

  getDataToken(){

    let seguridad : Seguridad={
      "agencyId": "Pw7uAcZ2xfeuXCrig",
      "agencyKey": "nU5l03ape5pxy1K4UiYmfR36ENNmYwBl/PG4yyZg/DEwaSrnCOHDTJUdZO+dI3rrJo8KKXnJ94GGa9g10BUGtA==",
      "clientId": "apps.booktofly.net"
    };

    let body = JSON.stringify(seguridad);
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options = {headers : headers};
    return this.http.post('https://demo.booktofly.co/auth/api/auth/agency/token', body, options);
  }

  getDataPlanes(dias: number, adultos: number, ninos:number, token:string){
      console.log(token);
      let headers = new HttpHeaders().set('Authorization', 'Bearer '+ token).set('Content-Type', 'application/json; charset=utf-8');
      let options = {headers : headers};
      let url = 'https://demo.booktofly.co/search/api/plans/disney/availability/'+dias+'/'+adultos+'/'+ninos;
      console.log(url);
      return this.http.get<Plan[]>(url, options);

  }
}
