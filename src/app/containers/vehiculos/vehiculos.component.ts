import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  vehiculos = '';
  paginaActual = 1;

  constructor(
    private vehiculoService: VehiculosService
  ) { }

  ngOnInit(): void {
    this.MostrarVehiculos(this.paginaActual);
  }
  addPilots(vehi){
    vehi.piloto = [];
    vehi.pilots.forEach(element => {
    this.vehiculoService.Filtrar(element).subscribe((res: any) => {
      vehi.piloto.push(res)
    });
  });
  }

  addFilms(vehi){
    vehi.peli = [];
    vehi.peli.forEach(element => {
      this.vehiculoService.Filtrar(element).subscribe((res: any) => {
        vehi.peli.push(res);
      });
    });
  }


  MostrarVehiculos(pagina): void{
    this.vehiculoService.Obtener(pagina).subscribe((vehicle: any) => {
      for(const vehi of vehicle.results){
        this.addPilots(vehi);
        this.addFilms(vehi);
      }
      this.vehiculos = vehicle.results;
    });
  }

  nextPage(){
    this.paginaActual ++;
    this.MostrarVehiculos(this.paginaActual);
  }
  beforePage(){
    this.paginaActual --;
    this.MostrarVehiculos(this.paginaActual);
  }


}
