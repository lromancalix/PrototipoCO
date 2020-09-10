import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { TarjetaModel } from '../../../models/tc/tarjeta.model';
import { TarjetaCreditoService } from '../../../services/tarjeta-credito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjetacredito',
  templateUrl: './tarjetacredito.component.html',
  styleUrls: ['./tarjetacredito.component.scss']
})
export class TarjetacreditoComponent implements OnInit {

  ingreso = 1000;
  direccion1 = 'assets/img/TC/bancomer/tarjeta-infinite-card.png';
  direccion2 = 'assets/img/TC/banorte/clasica.png';
  direccion3 = 'assets/img/TC/citybanamex/oro1.png';


  public tarjetas: any[] = [];

  constructor( private tarService: TarjetaCreditoService ) {
    this.buscarTarjetas();
   }

  ngOnInit() {
  }

  buscarTarjetas() {
    Swal.fire({
      title: 'Espere',
      text: 'Cargando datos...',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();
    this.tarService.getTarjetasPromise().then( ( ) => {
      this.tarjetas = this.tarService.tarjetas;
      console.log( 'Componente: ', this.tarjetas );
      Swal.close();
    } );
  }

  formatLabel(value: number) {

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  CrearTarjetas() {
  }

  valorSlider( event: any ) {
    this.ingreso = event.value;
    this.tarjetas = this.tarService.filtrarTarjetas( event.value );
  }

}
