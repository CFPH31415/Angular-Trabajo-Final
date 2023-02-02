import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListaComponent } from './pages/lista/lista.component';
import { EntrarComponent } from './pages/entrar/entrar.component';

const routes: Routes = [
  { path:'home', component:HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path:'login', component:LoginComponent },
  { path:'entrar', component:EntrarComponent },
  { path:'registro', component:RegistroComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path:'lista', component:ListaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path:'', redirectTo:'login', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
