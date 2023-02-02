import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { EntrarComponent } from './entrar/entrar.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegistroComponent,
    ListaComponent,
    EntrarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegistroComponent,
    ListaComponent,
    EntrarComponent,
    FooterComponent
  ]
})
export class PagesModule { }
