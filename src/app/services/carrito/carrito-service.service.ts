import { Injectable } from '@angular/core';
import { TarjetaCarritoModel } from '../../models/tc/tarjeta.carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  tarjetas: any[] = [];
  costoTarjeta = 150;

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

  get costoTotal() {
    return this.elementosEnCarrito * this.costoTarjeta;
  }

}
