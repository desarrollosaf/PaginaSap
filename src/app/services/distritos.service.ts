import { Injectable, signal, inject, computed } from '@angular/core';
import { Distritos } from '../interfaces/distritos'
import { HttpClient } from '@angular/common/http';

interface State{
  distritos: Distritos[],
  loading:boolean
}

@Injectable({
  providedIn: 'root'
})
export class DistritosService {

  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    distritos: []
  })

  public distritos =  computed( () => this.#state().distritos );
  public loading =  computed( () => this.#state().loading );

  constructor() {
    this.http.get<Distritos[]>('http://pleno.test/api/getDipEleccion').subscribe( res => {
      this.#state.set({
        loading : false,
        distritos : res
      })
    })

   }

}