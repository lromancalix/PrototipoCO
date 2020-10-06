import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PersonalesModel } from '../../models/cliente/datos-personales';
import { MatAccordion, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { CarritoService } from '../../services/carrito/carrito-service.service';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {

  /**** Inicialización de variables ****/
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild('modalPago', {static: false}) modalPago: TemplateRef<any>;

  accordion: MatAccordion;
  panelOpenState = false;
  step = 0;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  appFormControl = new FormControl('', [
    Validators.required,
  ]);
  apmFormControl = new FormControl('', [
    Validators.required,
  ]);
  fechaNacimientoFormControl = new FormControl('', [
    Validators.required,
  ]);
  rfcFormControl = new FormControl('', [
    Validators.required,
  ]);
  calleFormControl = new FormControl('', [
    Validators.required,
  ]);
  numeroFormControl = new FormControl('', [
    Validators.required,
  ]);
  coloniaFormControl = new FormControl('', [
    Validators.required,
  ]);
  ciudadFormControl = new FormControl('', [
    Validators.required,
  ]);
  municipioFormControl = new FormControl('', [
    Validators.required,
  ]);

  datosForm: FormGroup;
  dpersonales: PersonalesModel;

  mostrarCobro = false;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
 
  /**** FIN Inicialización de variables ****/

  constructor( private fb: FormBuilder, public carritoServ: CarritoService ) {
    this.construirForm();
   }

  ngOnInit() {
  }

  get IsNombreValid() {
    return this.datosForm.get('Nombre').invalid && this.datosForm.get('Nombre').touched;
  }


  construirForm() {
    this.datosForm = this.fb.group({
      nombre: [ '' , Validators.required ],
      app: [ '' , Validators.required],
      apm: [ '' , [ Validators.required, ] ],
      correo: [ '', Validators.required ],
      fechaNacimiento: [ '', Validators.required ],
      rfc: [ '', Validators.required ],
      calle: [ '', Validators.required ],
      numero: [ '', Validators.required ],
      colonia: [ '', Validators.required ],
      cp: [ '', Validators.required ],
      estado: [ '', Validators.required ],
      ciudad: [ '', Validators.required ],
      municipio: [ '', Validators.required ],
      terminos: [ '', Validators.required ]
    });
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

  abrirModal() {
    $('#miModal').modal('show');
  }

  continuar() {
    this.mostrarCobro = true;
  }

}
