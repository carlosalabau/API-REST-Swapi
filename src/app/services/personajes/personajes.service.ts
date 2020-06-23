import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  BASE = 'https://swapi.dev/api/people';

  constructor(
    private http: HttpClient
  ) { }


ListarPersonajesById(id: number){
  return this.http.get(`${this.BASE}/?page=${id}`);
}
ObtenerResultados(url: string){
  return this.http.get(url);
}

}
