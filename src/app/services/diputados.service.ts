import { Injectable, signal, inject, computed } from '@angular/core';
import { Diputados } from '../interfaces/diputados'
import { HttpClient } from '@angular/common/http';

interface State{
  diputados: Diputados[],
  loading:boolean
}

@Injectable({
  providedIn: 'root'
})
export class DiputadosService {

  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    diputados: []
  })

  public diputados =  computed( () => this.#state().diputados );
  public loading =  computed( () => this.#state().loading );

  constructor() {
    this.http.get<Diputados[]>('http://pleno.test/api/getDipAsc').subscribe( res => {
      this.#state.set({
        loading : false,
        diputados : res
      })
      console.log(res)
      console.log(this.#state().diputados)
    })
    
  
   }

}
