import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
// Inicialización de la clase EntrarComponent

export class EntrarComponent implements OnInit{
// Definición del formulario formRegistroUser con los campos email y password

  formRegistroUser!:FormGroup;
// Inyección de dependencias del servicio de usuario y el router

  constructor(private usuarioService:UsuarioService, private router:Router){
// Inicialización del formulario formRegistroUser con sus controles email y password

    this.formRegistroUser = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }
// Método que se ejecuta al inicializar el componente

  ngOnInit(): void {
  }
// Método que se ejecuta al hacer submit en el formulario formRegistroUser

  onSubmit(){
    // Llama al método registerUser del servicio usuarioService pasándole los valores del formulario

    this.usuarioService.registerUser(this.formRegistroUser.value)
    // Si se registra correctamente, se navega a la ruta /login

    .then(response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    // Si ocurre un error, se muestra en la consola

    .catch(error => console.log(error))
  }
// Método que navega a la ruta /login

  iniciarSesion(){
    this.router.navigate(['/login']);
  }
}

