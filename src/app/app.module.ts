import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { CarauselComponent } from './pages/home/carausel/carausel.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { AboutComponent } from './pages/home/about/about.component';
import { ServsComponent } from './pages/home/servs/servs.component';
import { PrecioComponent } from './pages/home/precio/precio.component';
import { TarjetacreditoComponent } from './pages/ofertas/tarjetacredito/tarjetacredito.component';
import { Tarjetav2Component } from './components/tc/tarjetav2/tarjetav2.component';
import { PasosComponent } from './pages/home/pasos/pasos.component';
import { HttpClientModule } from '@angular/common/http';
import { SeccionSeguridadComponent } from './pages/home/seccion-seguridad/seccion-seguridad.component';
import { CarritoToolbarComponent } from './components/carrito/carrito-toolbar/carrito-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosPersonalesComponent } from './pages/datos-personales/datos-personales.component';
import { CarritoListaComponent } from './components/carrito/carrito-lista/carrito-lista.component';
import { PaypalComponent } from './components/pago/paypal/paypal.component';
import { PagotarjetaComponent } from './components/pago/pagotarjeta/pagotarjeta.component';
import { AgradecimientoComponent } from './pages/agradecimiento/agradecimiento.component';
import { TarjetaCobroComponent } from './components/pago/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    CarauselComponent,
    FooterComponent,
    AboutComponent,
    ServsComponent,
    PrecioComponent,
    TarjetacreditoComponent,
    Tarjetav2Component,
    PasosComponent,
    SeccionSeguridadComponent,
    CarritoToolbarComponent,
    DatosPersonalesComponent,
    CarritoListaComponent,
    PaypalComponent,
    PagotarjetaComponent,
    AgradecimientoComponent,
    TarjetaCobroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
