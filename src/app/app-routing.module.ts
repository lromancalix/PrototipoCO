import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { TarjetacreditoComponent } from './pages/ofertas/tarjetacredito/tarjetacredito.component';
import { DatosPersonalesComponent } from './pages/datos-personales/datos-personales.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tarjetas',
    component: TarjetacreditoComponent
  },
  {
    path: 'personales',
    component: DatosPersonalesComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
