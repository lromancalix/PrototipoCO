import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetacredito',
  templateUrl: './tarjetacredito.component.html',
  styleUrls: ['./tarjetacredito.component.scss']
})
export class TarjetacreditoComponent implements OnInit {

  ingreso = 10000;

  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number) {
    
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  valorSlider( event: any ) {
    this.ingreso = event.value;
  }

}
