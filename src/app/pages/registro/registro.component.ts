import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister!: FormGroup;

  constructor(private ProductosService:ProductosService, private router:Router) {
    this.formRegister = new FormGroup({
      producto: new FormControl(),
      costo: new FormControl(),
      foto: new FormControl()
    })
  }
  ngOnInit(): void {

  }

  onSubmit() {

    const response = this.ProductosService.addProduct(this.formRegister.value)
    
    console.log(response)
    this.router.navigate(['/lista'])
    
  }}