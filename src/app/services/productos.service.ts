import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Producto } from '../interfaces/products-interface';
import { Observable } from 'rxjs';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
// Este código es un servicio de Angular que se encarga de manejar la lógica de los productos.

export class ProductosService {
  // Se inyecta el servicio de Firestore

  constructor( private firestore:Firestore) { }
    // Método que agrega un producto a la base de datos

  addProduct(producto:Producto){
    // Se obtiene una referencia a la colección de productos en Firestore

    const ProductRef = collection(this.firestore, 'producto');
        // Se llama a la función addDoc para agregar el producto a la colección

    return addDoc(ProductRef, producto);
  }
    // Método que obtiene todos los productos de la base de datos

  getProduct():Observable<Producto[]>{
        // Se obtiene una referencia a la colección de productos en Firestore

    const ProductRef = collection(this.firestore, 'producto');
        // Se llama a la función collectionData para obtener los datos de la colección

    return collectionData(ProductRef, {idField:'id'}) as Observable<Producto[]>
  }
    // Método que elimina un producto de la base de datos

  deleteProduct(producto:Producto){
        // Se obtiene una referencia al documento específico de Firestore

    const ProductRef = doc(this.firestore, `producto/${producto.id}`)
        // Se llama a la función deleteDoc para eliminar el documento

    return deleteDoc(ProductRef);
  }
}
