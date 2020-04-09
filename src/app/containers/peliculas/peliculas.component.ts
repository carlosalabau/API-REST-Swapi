import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  peliculas;
  constructor(
    private peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {
    this.Peliculas();

  }

  Peliculas(){
    return this.peliculasService.ListarPeliculas().subscribe((peli: any) => {
      this.peliculas = peli.results;
    });
  }

}
