import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Producto } from '../interfaces/products-interface';
import { Observable } from 'rxjs';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private firestore:Firestore) { }
  addProduct(producto:Producto){
    const ProductRef = collection(this.firestore, 'producto');
    return addDoc(ProductRef, producto);
  }
  getProduct():Observable<Producto[]>{
    const ProductRef = collection(this.firestore, 'producto');
    return collectionData(ProductRef, {idField:'id'}) as Observable<Producto[]>
  }
  deleteProduct(producto:Producto){
    const ProductRef = doc(this.firestore, `producto/${producto.id}`)
    return deleteDoc(ProductRef);
  }
}
