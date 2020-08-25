import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url= 'https://aqueous-spire-30568.herokuapp.com/' /*establezco el servidor con el que me voy a comunicar*/


  constructor( private http: HttpClient ) { }


  async guardarLibro(unLibro){

    try {
        let resultado:any;

        resultado= await this.http.post( this.url+ "libro",unLibro).toPromise() ;/*establezco la comunicacion con el servidor y le digo que voy a mandarle un libro(metodo post) a la url(this url), el await inidica que vamos a esparar a que el servidor responda*/

        return resultado;
      
    } catch (error) {
      console.log(error);
      
    }
  }

   async listaDeLibros(){ //esta funcion pide todos los libros que tengo en mi biblioteca

    try{
      let resultado:any;
      resultado= await this.http.get(this.url+"libro").toPromise();

      return resultado;

    } catch(error) {
      console.log(error);
    }

  }

}
