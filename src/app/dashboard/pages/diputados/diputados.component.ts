import { Component, inject } from '@angular/core';
import { DiputadosService } from '@services/diputados.service';

@Component({
  selector: 'app-diputados',
  standalone: true,
  imports: [],
  templateUrl: './diputados.component.html',
  styleUrl: './diputados.component.css'
})
export default class DiputadosComponent {
  public diputadosService  =  inject( DiputadosService )

  constructor() {
    //console.log(this.diputadosService.diputados().findIndex)

  }
}
