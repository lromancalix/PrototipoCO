import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { CarritoService } from '../../../services/carrito/carrito-service.service';

@Component({
  selector: 'app-carrito-toolbar',
  templateUrl: './carrito-toolbar.component.html',
  styleUrls: ['./carrito-toolbar.component.scss']
})
export class CarritoToolbarComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor( public carritoServ: CarritoService,
               private _snackBar: MatSnackBar ) { }

  ngOnInit() {
  }

  get mostrarBadgesCarrito() {
    return ( this.carritoServ.elementosEnCarrito > 0 ) ? true : false;
  }

  quitarProducto( idProducto: any ) {
    const response = this.carritoServ.quitar( idProducto );
    this.openSnackBar( response );
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
