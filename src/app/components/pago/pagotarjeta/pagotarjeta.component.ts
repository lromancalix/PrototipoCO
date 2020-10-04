import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CarritoService } from '../../../services/carrito/carrito-service.service';

@Component({
  selector: 'app-pagotarjeta',
  templateUrl: './pagotarjeta.component.html',
  styleUrls: ['./pagotarjeta.component.scss']
})
export class PagotarjetaComponent implements OnInit {

  hide = false;
  @Input()
  mostrarCobro: boolean;

  @Output()
  cobroCerrado = new EventEmitter<boolean>();


  constructor( public carritoServ: CarritoService ) { }

  ngOnInit() {
  }



}
