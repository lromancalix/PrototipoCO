import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { MatAccordion } from '@angular/material/expansion';
import { CarritoService } from '../../../services/carrito/carrito-service.service';

@Component({
  selector: 'app-carrito-lista',
  templateUrl: './carrito-lista.component.html',
  styleUrls: ['./carrito-lista.component.scss']
})
export class CarritoListaComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  accordion: MatAccordion;
  panelOpenState = false;
  step = 0;

  constructor( 
    public carritoServ: CarritoService,
    private _snackBar: MatSnackBar ) { }

  ngOnInit() {
  }



  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
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
