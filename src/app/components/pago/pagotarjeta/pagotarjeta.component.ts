import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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


  constructor( public carritoServ: CarritoService, private router: Router ) { }

  ngOnInit() {
  }


  pagar() {

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      title: 'Realizando pago',
      text: 'Espere un momento por favor..'
    });

    Swal.showLoading();

    setTimeout(() => {
      Swal.close();
      this.agredecimiento();
    }, 2500);

  }

  agredecimiento() {

    Swal.fire({
      allowOutsideClick: false,
      icon: 'success',
      title: 'Pago realizado exitosamente',
      showConfirmButton: false
    });

    setTimeout(() => {
      this.router.navigate(['/agradecimiento']);
      Swal.close();
    }, 2500);

 

  }

}
