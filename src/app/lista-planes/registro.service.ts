import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reserva} from './Reserva';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http : HttpClient) { }
  
  getConfirmacionReserva(token: string){

    let mensaje ={
      "passengers": [],
      "contactInformation": {
        "email": "santiagomoreno696@gmail.com",
        "phoneNumber": "3128941940"
      },
      "cardHolder": {
        "currentMethod": "book",
        "documentType": "CC",
        "installments": 1,
        "firstName": null,
        "lastName": null,
        "expirationMonth": 11,
        "expirationYear": 2018,
        "signature": null,
        "token": null,
        "securityCode": null
      },
      "userDefinedData": [
        {
          "remark": "RM*OS/SV-",
          "name": "Orden de Compra",
          "dirty": true,
          "value": 1
        },
        {
        "remark": "RM*PR-",
        "name": "Proyecto",
        "dirty": true,
        "value": "Proyecto1"
        }
      ],
      "agencyId": "Pw7uAcZ2xfeuXCrig",
      "customer": {
        "type": "natural",
        "documentType": {
          "code": "CC",
          "name": null,
          "culture": null
        },
        "name": "Santiago",
        "lastName": "Moreno",
        "customerId": "1017240694",
        "address": "Medellin",
        "phoneNumber": "3128941940"
      },
      "planId": "a0803c36-9175-475a-b979-3b9f7dadb02c",
      "numberOfDays": 2,
      "ipAddress": {
        "ip": "190.28.126.23",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
      },
      "fees": [
      {
      "amount": 0,
      "amountType": "Additional",
      "currency": ""
      }
      ],
      "checkIn": "2019-2-13",
      "visitors": [
      {
      "type": 0,
      "quantity": 0,
      "age": null,
      "gender": "male",
      "documentType": {
      "code": "CC"
    },
      "birthDateValid": true,
      "birthDate": "1996-11-12",
      "firstName": "Santiago",
      "lastName": "Moreno",
      "document": "1017240694",
      "email": "santiagomoreno696@gmail.com"
    }
    ]
   };

    let url = 'https://demo.booktofly.co/booking/api/plans/disney/book';
    let body = JSON.stringify(mensaje);
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+ token).set('Content-Type', 'application/json; charset=utf-8');
    let options = {headers : headers};
    return this.http.post<Reserva>('https://demo.booktofly.co/booking/api/plans/disney/book', body, options);
  
  }
}
