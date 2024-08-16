import { Component, inject } from '@angular/core';
import { DistritosService } from '@services/distritos.service';

@Component({
  selector: 'app-distritos',
  standalone: true,
  imports: [],
  templateUrl: './distritos.component.html',
  styleUrl: './distritos.component.css'
})
export default class DistritosComponent {
  public distritosService  =  inject( DistritosService )

  constructor(){
  } 
}
