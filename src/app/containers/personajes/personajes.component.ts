import {
  Component,
  OnInit
} from '@angular/core';
import {
  PersonajesService
} from '../../services/personajes/personajes.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes = '';
  paginaActual = 1;
  constructor(
    private personajeService: PersonajesService
  ) {}

  ngOnInit(): void {
    this.PersonajesByPage(this.paginaActual);
  }
  addSpecies(specie, personaje){
    this.personajeService.ObtenerResultados(specie)
    .subscribe((res: any) => personaje.especie = res.name);
  }
  addHome(url, personaje){
    this.personajeService.ObtenerResultados(url)
    .subscribe((res: any) => personaje.lugar = res.name);
  }

  PersonajesByPage(id: number): void {
    this.personajeService.ListarPersonajesById(id).subscribe((person: any) => {
      for (const personaje of person.results) {
        this.addSpecies(personaje.species[0], personaje);
        this.addHome(personaje.homeworld, personaje);
      }
      this.personajes = person.results;
    });
  }
  nextPage() {
    this.paginaActual += 1;
    this.PersonajesByPage(this.paginaActual);
  }
  beforePage() {
    this.paginaActual -= 1;
    this.PersonajesByPage(this.paginaActual);
  }

}
