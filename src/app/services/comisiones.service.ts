import { computed, inject, Injectable, signal } from '@angular/core';
import { Comision, ComisionesResponse } from '../interfaces/comisiones';
import { HttpClient } from '@angular/common/http';


interface State{
  comisiones: Comision[],
  loading:boolean,
  comisionSeleccionada: Comision[],
}
@Injectable({
  providedIn: 'root'
})
export class ComisionesService {

  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    comisiones: [],
    comisionSeleccionada: [],
  })
  

  public comisiones =  computed( () => this.#state().comisiones );
  public loading =  computed( () => this.#state().loading );
  public comisionesE =  computed( () => this.#state().comisionSeleccionada );
  
  constructor() {
    this.http.get<ComisionesResponse>('http://pleno.test/api/comisiones').subscribe( res => {
      console.log(res.data1)
      this.#state.set({
        loading : false,
        comisiones : res.data1,
        comisionSeleccionada: res.data2
      });
   

      
    })

   
   
   }
}
