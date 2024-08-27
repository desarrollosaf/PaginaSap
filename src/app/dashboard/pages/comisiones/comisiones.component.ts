import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ComisionesService } from '@services/comisiones.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comisiones',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './comisiones.component.html',
  styleUrl: './comisiones.component.css'
})
export default class ComisionesComponent {
  public comisionesService  =  inject( ComisionesService)
 

  constructor(){

    console.log(this.comisionesService.comisionesE);
    //console.log('hola');
  } 


}


