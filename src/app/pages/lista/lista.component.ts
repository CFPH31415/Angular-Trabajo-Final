import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/products-interface';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
// Este componente representa la lista de productos en la aplicación

export class ListaComponent implements OnInit{
  // Almacenar la lista de productos

  prodts!:Producto[];
  // Inyectar los servicios ProductosService y Router en el componente

  constructor(private ProductosService: ProductosService, private router:Router){ }

  // Inicializar el componente y obtener la lista de productos

  ngOnInit(): void {

   // Suscribirse al observable que devuelve la lista de productos del servicio ProductosService
    this.ProductosService.getProduct().subscribe(Producto => {
   // Almacenar la lista de productos en la propiedad prodts

      this.prodts = Producto
    })
  }
  // Eliminar un producto de la lista

  onClickDelete(producto:Producto){
        // Llamar al método deleteProduct del servicio ProductosService y almacenar la respuesta

    const response = this.ProductosService.deleteProduct(producto)
        // Mostrar la respuesta en la consola

    console.log(response);
  }
  // Navegar a la página de registro

  onClickNuevo(){
    this.router.navigate(['/registro'])
  }
  // Navegar a la página de registro

  productos(){
    this.router.navigate(['/registro'])
  }
}
