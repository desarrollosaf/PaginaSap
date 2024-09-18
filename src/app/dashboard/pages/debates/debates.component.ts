import { Component, inject } from '@angular/core';
import { DebatesService } from '@services/debates.service';

@Component({
  selector: 'app-debates',
  standalone: true,
  imports: [],
  templateUrl: './debates.component.html',
  styleUrl: './debates.component.css'
})
export default class DebatesComponent {
  public debatesService  =  inject( DebatesService )

  constructor() {


  }

}
