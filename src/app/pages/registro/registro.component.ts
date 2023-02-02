import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
// Este componente implementa el gancho de ciclo de vida OnInit para configurar el formulario para registrar un producto
export class RegistroComponent implements OnInit {
  // Un objeto FormGroup para representar el formulario para registrar un producto

  formRegister!: FormGroup;
  // Inyectar los servicios ProductosService y Router en el componente

  constructor(private ProductosService:ProductosService, private router:Router) {
        // Inicializa el formulario con objetos FormControl para los campos producto, costo y foto

    this.formRegister = new FormGroup({
      producto: new FormControl(),
      costo: new FormControl(),
      foto: new FormControl()
    })
  }
    // Este gancho se llama cuando el componente se inicializa

  ngOnInit(): void {

  }
  // Envía el formulario y agrega un nuevo producto a la lista de productos

  onSubmit() {
    // Registrar la respuesta del servicio

    const response = this.ProductosService.addProduct(this.formRegister.value)
        // Navegar al componente lista después de que se envíe el formulario

    console.log(response)
    this.router.navigate(['/lista'])
    
  }}
