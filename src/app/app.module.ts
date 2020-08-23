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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    CarauselComponent,
    FooterComponent,
    AboutComponent,
    ServsComponent,
    PrecioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
