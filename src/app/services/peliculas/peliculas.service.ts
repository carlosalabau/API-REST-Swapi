import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  BASE = 'https://swapi.co/api/films/';

  constructor(
    private http: HttpClient
  ) { }

    ListarPeliculas(){
      return this.http.get(this.BASE);
    }

}
