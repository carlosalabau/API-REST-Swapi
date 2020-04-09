import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  BASE = 'https://swapi.co/api/planets'

  constructor(
    private http: HttpClient
  ) { }

  ListarPlanetasById(id: number){
    return this.http.get(`${this.BASE}/?page=${id}`);
  }
  ObtenerNombre(url: string){
    return this.http.get(url);
  }
}
