import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable
  ({
    providedIn: 'root'
  })
export class LibrosService
{

  url = 'https://aqueous-spire-30568.herokuapp.com/' /*establezco el servidor con el que me voy a comunicar*/

  constructor(private http: HttpClient) {}

  async guardarLibro(unLibro)
  {
    try
    {
      /*establezco la comunicacion con el servidor y le digo que voy a mandarle un libro(metodo post) a la url(this url), el await inidica que vamos a esparar a que el servidor responda*/
      return await this.http.post(this.url + "libro", unLibro).toPromise();
    }
    catch (error)
    {
      console.log(error);
    }
  }

  /**
   * Se pide todos los libros que tengo en mi biblioteca
   */
  async listaDeLibros()
  {
    try
    {
      return await this.http.get(this.url + "libro").toPromise();
    }
    catch (error)
    {
      console.log(error);
    }
  }

  /**
   * Se envia en nombre de la persona a la base de datos
   * @param idLibro 
   * @param inputLended 
   */
  async actualizarLended(idLibro, inputLended)
  {
    try
    {
      let prestadoAPersona =
      {
        lended: inputLended,
      }

      await this.http.put(this.url + "libro/" + idLibro, prestadoAPersona).toPromise();
    }
    catch (e)
    {
      console.log(e)
    }
  }
}
