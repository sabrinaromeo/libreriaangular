import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  url= 'https://aqueous-spire-30568.herokuapp.com/';

  constructor( private http: HttpClient ) { }

  async listaGeneros(){

    try{ 
    let generos:any;
  
      generos= await this.http.get(this.url+"genero").toPromise();
      
      return generos;
    }
   catch(error){
    console.log(error);
    }
   }



}
