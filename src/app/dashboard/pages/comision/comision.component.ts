import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comision } from '../../../interfaces/comisiones';
import { toSignal} from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';
import { ComisionesService } from '@services/comisiones.service';

@Component({
  selector: 'app-comision',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './comision.component.html',
  styleUrl: './comision.component.css'
})
export default class ComisionComponent {
    private route = inject(ActivatedRoute);
    private comisionesService = inject(ComisionesService);
    public comision = toSignal(
      this.route.params.pipe(
        switchMap( ({ id }) => this.comisionesService.getComisionById( id ))
      )
    )
    //public comision = signal<Comision| undefined>(undefined)
    //constructor () {
    // this.route.params.subscribe(params => {
     // console.log({params});
     //})
    //}
}
