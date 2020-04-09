import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../../services/planetas/planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {
  planetas = '';
  paginaActual = 1;
  constructor(
  private planetaService: PlanetasService
  ) { }

  ngOnInit(): void {
    this.PlanetasByPage(this.paginaActual);
  }
  addResidents(planeta){
    planeta.gente = [];
    planeta.residents.forEach(resident => {
      this.planetaService.ObtenerNombre(resident)
      .subscribe((res: any) => {
        planeta.gente.push(res);
      });
    });
  }
  addFilms(planeta){
    planeta.peli = [];
    planeta.films.forEach(film => {
      this.planetaService.ObtenerNombre(film)
      .subscribe((res: any) => {
        planeta.peli.push(res);
      });
    });
  }

  PlanetasByPage(id: number){
    this.planetaService.ListarPlanetasById(id).subscribe((planet: any) => {
      for (const planeta of planet.results) {
        this.addResidents(planeta);
        this.addFilms(planeta);
      }
      this.planetas = planet.results;
    });
  }

  nextPage() {
    this.paginaActual += 1;
    this.PlanetasByPage(this.paginaActual);
  }
  beforePage() {
    this.paginaActual -= 1;
    this.PlanetasByPage(this.paginaActual);
  }

}
