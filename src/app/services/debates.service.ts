import { Debates, Tomo1Element } from '../interfaces/debates';
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';


interface State{
  loading:boolean,
  debates: Tomo1Element[],
}


@Injectable({
  providedIn: 'root'
})
export class DebatesService {
  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    debates: [],
  })
  

  public loading =  computed( () => this.#state().loading );
  public debates =  computed( () => this.#state().debates);

  constructor() {
    this.http.get<Debates>('http://pleno.test/api/debates').subscribe( res => {
     
      this.#state.set({
        loading : false,
        debates : res.Tomos.Tomo1,
      }); 
      
    }) 

    console.log(this.#state().debates)
   }

}
