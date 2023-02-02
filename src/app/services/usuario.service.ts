import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
// El servicio Auth es inyectado en el constructor

  constructor(private auth:Auth) { }
  // Registra un nuevo usuario con un correo electrónico y una contraseña

  registerUser({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
// Inicia sesión con un usuario existente y su correo electrónico y contraseña

  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password)
  }
// Cierra la sesión del usuario actualmente iniciado

  logout(){
    return signOut(this.auth);
  }


}
