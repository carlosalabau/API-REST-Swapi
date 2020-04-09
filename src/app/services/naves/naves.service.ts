import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NavesService {

  BASE = 'https://swapi.co/api/starships';

  constructor(
    private http: HttpClient
  ) { }

    ListarNavesByPage(pagina: number){
      return this.http.get(`${this.BASE}/?page=${pagina}`);
    }
    Filtrar(url){
      return this.http.get(url);
    }


}
