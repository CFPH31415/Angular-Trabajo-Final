import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin!:FormGroup;

  constructor(private usuarioService:UsuarioService, 
    private router:Router){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.usuarioService.login(this.formLogin.value)
    .then(
      response => {
        this.router.navigate(['/home'])
        console.log(response);
      }
    )
    .catch(error => console.log(error));
  }

  registrarse(){
    this.router.navigate(['/entrar']);
  }
}
