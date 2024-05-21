import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constante } from '../services/contant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // Se realiza la peticion, segun el metodo POST, GET, PUT, DELETE
  // Con la URL de mi novia 

  getProducto(){
    return this.http.get(Constante.urlBase + Constante.urlGetProducto)
  }

}
