import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {

  constructor(private productoSrv:ProductService ) {} 
  
  listaProductos: any[] = []
  baseUrl: string = 'http://192.168.1.6:8000';

  ngOnInit(): void {
    this.cargarProductos()
  }



  cargarProductos(){
    this.productoSrv.getProducto().subscribe((res: any)=>{
      this.listaProductos = res
      // console.log("JSON ",res)
    })
  }
  



}
