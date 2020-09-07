import { Component, OnInit } from '@angular/core';
import { TarjetaModel } from '../../../models/tc/tarjeta.model';

@Component({
  selector: 'app-tarjetacredito',
  templateUrl: './tarjetacredito.component.html',
  styleUrls: ['./tarjetacredito.component.scss']
})
export class TarjetacreditoComponent implements OnInit {

  ingreso = 10000;
  direccion1 = 'assets/img/TC/bancomer/tarjeta-infinite-card.png';
  direccion2 = 'assets/img/TC/banorte/clasica.png';
  direccion3 = 'assets/img/TC/citybanamex/oro1.png';

  arrayTarjetas: TarjetaModel[] = [
    {
      banco: 'Bancomer',
      tarjeta: 'Bancomer Infinite',
      descripcion: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.',
      monto: 10000,
      urlImagen: 'assets/img/TC/bancomer/tarjeta-infinite-card.png'
    },
    
    {
      banco: 'Banorte',
      tarjeta: 'Banorte Clásica',
      descripcion: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.',
      monto: 10000,
      urlImagen: 'assets/img/TC/banorte/clasica.png'
    },
    
    {
      banco: 'CityBanamex',
      tarjeta: 'Banamex ORO',
      descripcion: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.',
      monto: 10000,
      urlImagen: 'assets/img/TC/citybanamex/oro1.png'
    },

    {
      banco: 'Bancomer',
      tarjeta: 'Bancomer ORO',
      descripcion: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.',
      monto: 10000,
      urlImagen: 'assets/img/TC/bancomer/oro.png'
    }

  ];
  constructor() { }

  ngOnInit() {
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
  }

}
