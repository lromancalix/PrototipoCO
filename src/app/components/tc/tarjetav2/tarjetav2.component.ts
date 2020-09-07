import { Component, OnInit, Input } from '@angular/core';
import { TarjetaModel } from '../../../models/tc/tarjeta.model';

@Component({
  selector: 'app-tarjetav2',
  templateUrl: './tarjetav2.component.html',
  styleUrls: ['./tarjetav2.component.scss']
})
export class Tarjetav2Component implements OnInit {

  @Input()
  urlImagen = 'assets/img/TC/bancomer/tarjeta-infinite-card.png';

  @Input()
  tarjeta: TarjetaModel;

  mouseIsOver = false;

  constructor() { }

  ngOnInit() {
  }

}
