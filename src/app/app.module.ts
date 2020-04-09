import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PeliculasComponent } from './containers/peliculas/peliculas.component';
import { PersonajesComponent } from './containers/personajes/personajes.component';
import { PlanetasComponent } from './containers/planetas/planetas.component';
import { NavesComponent } from './containers/naves/naves.component';
import { VehiculosComponent } from './containers/vehiculos/vehiculos.component';
import { EspeciesComponent } from './containers/especies/especies.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PeliculasComponent,
    PersonajesComponent,
    PlanetasComponent,
    NavesComponent,
    VehiculosComponent,
    EspeciesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
