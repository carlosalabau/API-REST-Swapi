import { Component, OnInit } from '@angular/core';
import { EspeciesService } from 'src/app/services/especies/especies.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.scss']
})
export class EspeciesComponent implements OnInit {

  especies = '';
  paginaActual =  1;

  constructor(
    private especieService: EspeciesService
  ) { }

  ngOnInit(): void {
    this.MostrarByPage(this.paginaActual);
  }

  addPeople(especie){
    especie.gente = [];
    especie.people.forEach(element => {
      this.especieService.Filtrar(element).subscribe((res: any) => {
        especie.gente.push(res);
      });
    });
  }
  addFilms(especie){
    especie.peli = [];
    especie.films.forEach(element => {
      this.especieService.Filtrar(element).subscribe((res: any) => {
        especie.peli.push(res);
      });
    });
  }


  MostrarByPage(num: number){
    this.especieService.Obtener(num).subscribe((specie: any) => {
      for(const especie of specie.results){
        this.addPeople(especie);
        this.addFilms(especie);
      }
      this.especies = specie.results;
    });
  }
  nextPage(){
    this.paginaActual ++;
    this.MostrarByPage(this.paginaActual);
  }
  beforePage(){
    this.paginaActual --;
    this.MostrarByPage(this.paginaActual);
  }

}
