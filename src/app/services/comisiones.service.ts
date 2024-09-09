import { computed, inject, Injectable, signal } from '@angular/core';
import { Comision, ComisionesResponse, ComResponse, ComDataResponse} from '../interfaces/comisiones';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


interface State{
  loading:boolean,
  comisionesP: Comision[],
  comisionesE: Comision[],
  comisionesL: Comision[],
}
@Injectable({
  providedIn: 'root'
})

export class ComisionesService {

  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    comisionesP: [],
    comisionesE: [],
    comisionesL: [],
  })
  

 
  public loading =  computed( () => this.#state().loading );
  public comisionesP =  computed( () => this.#state().comisionesP);
  public comisionesE =  computed( () => this.#state().comisionesE);
  public comisionesL =  computed( () => this.#state().comisionesL);
  
  constructor() {
    this.http.get<ComisionesResponse>('http://pleno.test/api/comisiones').subscribe( res => {
      this.#state.set({
        loading : false,
        comisionesP : res.comisionesP,
        comisionesE : res.comisionesE,
        comisionesL : res.comisionesL,
      }); 
    }) 
   }

   getComisionById(id: string){
    return this.http.get<ComDataResponse>(`http://pleno.test/api/getcomision/${id}`).pipe(map( resp => resp));
    
   }
}
