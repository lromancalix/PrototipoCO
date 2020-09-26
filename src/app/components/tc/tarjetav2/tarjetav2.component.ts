import { Component, OnInit, Input } from '@angular/core';
import { TarjetaModel } from '../../../models/tc/tarjeta.model';
import { CarritoService } from '../../../services/carrito/carrito-service.service';
import { TarjetaCarritoModel } from '../../../models/tc/tarjeta.carrito.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

@Component({
  selector: 'app-tarjetav2',
  templateUrl: './tarjetav2.component.html',
  styleUrls: ['./tarjetav2.component.scss']
})
export class Tarjetav2Component implements OnInit {
  

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @Input()
  urlImagen = 'assets/img/TC/bancomer/tarjeta-infinite-card.png';

  @Input()
  tarjeta: any;

  mouseIsOver = false;

  // tslint:disable-next-line: variable-name
  constructor(public carritoServ: CarritoService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  agregarAlCarrito( tarjeta: any ) {
    this.carritoServ.agregar( tarjeta );
    this.openSnackBar('Tarjeta agregada.');
  }

  private openSnackBar(texto: string) {
    this._snackBar.open(texto, 'ocultar', {
      duration: 1500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
