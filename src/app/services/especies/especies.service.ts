import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {
BASE = 'https://swapi.co/api/species';
  constructor(
    private http: HttpClient
  ) { }

    Obtener(pagina: number){
      return this.http.get(`${this.BASE}/?page=${pagina}`);
    }
    Filtrar(url){
      return  this.http.get(url);
    }
}
