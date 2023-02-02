import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
// Este componente representa la barra de navegación en la aplicación

export class NavbarComponent {
  // Inyectar los servicios UsuarioService y Router en el componente

  constructor(private usuarioservice:UsuarioService, private router:Router){ }

  // Realizar el cierre de sesión del usuario y navegar a la página de inicio de sesión

  logout(){
        // Llamar al método logout del servicio UsuarioService

    this.usuarioservice.logout()
    .then(() => {
            // Navegar a la página de inicio de sesión después de cerrar la sesión con éxito

      this.router.navigate(['/login']);
    })
     // Imprimir un mensaje de error en caso de que ocurra un error durante el cierre de sesión
    .catch(error => console.log(error));
  }
}
