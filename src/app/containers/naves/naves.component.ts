import { Component, OnInit } from '@angular/core';
import { NavesService } from '../../services/naves/naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.scss']
})
export class NavesComponent implements OnInit {

    paginaActual = 1;
    naves = '';

  constructor(
    private naveService: NavesService
  ) { }

  ngOnInit(): void {
    this.ObtenerByPage(this.paginaActual);
  }
  addPilots(nav){
    nav.piloto = [];
    nav.pilots.forEach(pilot => {
      this.naveService.Filtrar(pilot).subscribe((res: any) => {
        nav.piloto.push(res);
      });
    });
  }
  addFilms(nav){
    nav.peli = [];
    nav.films.forEach(element => {
      this.naveService.Filtrar(element).subscribe((res: any) => {
        nav.peli.push(res);
      });
    });
  }

  ObtenerByPage(paginaActual: number) {
     this.naveService.ListarNavesByPage(paginaActual).subscribe((naves: any) => {
       for (const nav of naves.results){
        this.addPilots(nav);
        this.addFilms(nav);
       }
       this.naves = naves.results;
    });
  }
  nextPage(){
    this.paginaActual ++;
  }
  beforePage(){
    this.paginaActual --;
  }
}
