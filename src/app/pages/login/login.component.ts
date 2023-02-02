import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// Este código es un componente de inicio de sesión en Angular

export class LoginComponent implements OnInit{
  // Se inicializa un FormGroup para el formulario de inicio de sesión

  formLogin!:FormGroup;
  // Se inyectan los servicios necesarios para el funcionamiento del componente

  constructor(private usuarioService:UsuarioService, 
    private router:Router){
          // Se crea el FormGroup con dos campos: email y password

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
   }
  // Método que se ejecuta al inicializar el componente

  ngOnInit(): void {
  }
  // Método que se ejecuta al hacer submit en el formulario

  onSubmit(){
     // Se hace una llamada al método login del servicio usuarioService

    this.usuarioService.login(this.formLogin.value)
    .then(
      response => {
      // En caso de éxito, se redirige al usuario a la página de inicio

        this.router.navigate(['/home'])
        console.log(response);
      }
    )
            // En caso de error, se muestra en consola

    .catch(error => console.log(error));
  }
  // Método que redirige al usuario a la página de registro

  registrarse(){
    this.router.navigate(['/entrar']);
  }
}

