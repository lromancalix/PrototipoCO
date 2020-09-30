import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarjetaCreditoService {

  public tarjetas: any[] = [];
  private tarjetasOriginal: any[] = [];

  constructor( private http: HttpClient ) { }

  getTarjetasPromise() {
    return new Promise( ( resolve, reject ) => {

      setTimeout(() => {

        this.getTarjetasFromAPI()
        .subscribe( (response: any[] ) => {
          this.tarjetas = response;
          this.tarjetasOriginal = response;
          resolve();
        } );

      }, 1000);

    });
  }

  private getTarjetasFromAPI(): Observable<any[]> {
    return this.http.get<any[]>(`${ environment.urlService }/tarjetas.json`);
  }




  filtrarTarjetas(ingreso: number) {

    if ( ingreso === 1000 ) {
      this.tarjetas = this.tarjetasOriginal;
    } else {
      this.obtenerTarjetasFiltradas( ingreso );
    }

    return this.tarjetas;

  }

  private obtenerTarjetasFiltradas( ingreso: number ) {

    this.tarjetas = [];

    this.tarjetasOriginal.forEach( tarjeta => {

      if ( tarjeta.ingresoMinimo <= ingreso ) {
          this.tarjetas.push( tarjeta );
      }

    } );

  }

}
