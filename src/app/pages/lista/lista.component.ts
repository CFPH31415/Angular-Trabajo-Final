import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/products-interface';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  prodts!:Producto[];

  constructor(private ProductosService: ProductosService, private router:Router){ }


  ngOnInit(): void {
    this.ProductosService.getProduct().subscribe(Producto => {
      this.prodts = Producto
    })
  }

  onClickDelete(producto:Producto){
    const response = this.ProductosService.deleteProduct(producto)
    console.log(response);
  }

  onClickNuevo(){
    this.router.navigate(['/registro'])
  }
  productos(){
    this.router.navigate(['/registro'])
  }
}
