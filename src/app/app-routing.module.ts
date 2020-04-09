import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './containers/peliculas/peliculas.component';
import {PersonajesComponent} from './containers/personajes/personajes.component';
import {NavesComponent} from './containers/naves/naves.component';
import {PlanetasComponent} from './containers/planetas/planetas.component';
import {VehiculosComponent} from './containers/vehiculos/vehiculos.component';
import {EspeciesComponent} from './containers/especies/especies.component'
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'personajes', component: PersonajesComponent},
  {path: 'naves', component: NavesComponent},
  {path: 'planetas', component: PlanetasComponent},
  {path: 'vehiculos', component: VehiculosComponent},
  {path: 'especies', component: EspeciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
