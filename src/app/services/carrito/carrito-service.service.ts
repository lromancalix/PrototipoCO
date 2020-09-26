import { Injectable } from '@angular/core';
import { TarjetaCarritoModel } from '../../models/tc/tarjeta.carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  tarjetas: any[] = [];

  constructor() { }

  agregar( producto: any ) {
    this.tarjetas.push( producto );
    return 'Elemento agregado.';
  }

  quitar( idTarjeta: any ) {
    const index = this.tarjetas.indexOf( idTarjeta );
    
    if (index > -1) {
      this.tarjetas.splice(index, 1);
      return 'Elemento eliminado.';
     }
    return 'Elemento NO encontrado.';
  }

  get elementosEnCarrito() {
    return this.tarjetas.length;
  }

}
