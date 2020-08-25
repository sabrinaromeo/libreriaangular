import {Component, OnInit} from '@angular/core';
import {LibrosService} from '../libros.service';
import {GeneroService} from '../genero.service';

@Component
  ({
    selector: 'app-contenedor',
    templateUrl: './contenedor.component.html',
    styleUrls: ['./contenedor.component.css']
  })
export class ContenedorComponent implements OnInit
{
  libros: any = [];
  generos: any = [];

  constructor(private generoService: GeneroService, private librosService: LibrosService) {}/*aca hago la inyeccion de dependencia DEL SERVICE LIBROS (libros.service.ts) el prime librosService es el nombre que va a tener en el contendeor y el segundo es el nombre que tiene el service ACA DECIMOS QUE VAMOS A USAR EL SERVICE LIBROS*/

  async ngOnInit()
  {
    this.generos = await this.generoService.listaGeneros();
    this.libros = await this.librosService.listaDeLibros();
    /* this.lista es el array declarado mas arriba, y estoy entrando e libros service a la funcion listade libros que es la que BUSCA TODOS MIS LIBROS EN EL SERVIDOR.
    COMO TENGO QUE ESPERAR A QUE EL SERVIDOR REPOSNDA ESTE METODO ES ASINCRONICO*/

    /**
     * Se recorre el json de 'libros' con el fin de al momento de mostrar en el html los generos de cada libro
     * se visulice el nombre del mismo y no su id
     */
    this.libros.forEach(libro =>
    {
      libro.gender = this.getGenderById(libro.gender);
    });
  }

  /**
   * Se comunica con el emitter de nuevolibro.ts y que me manda  ese NUEVO LIBRO
   */
  async agregarLibroABiblioteca()
  {
    this.libros = await this.librosService.listaDeLibros(); //vuelvo a pedir la lista de libros ya que se actualiza con el nuevo libro ingrsado
  }

  /**
   * Se obtiene el nombre de un genero de acuerdo a su ID.
   * @param value string
   */
  getGenderById(value: string): string
  {
    console.log('value:' + value);
    let aux: string = 'none';
    this.generos.forEach(genero =>
    {
      if (genero.id == value)
      {
        aux = genero.name;
      }
    });

    return aux;
  }
}


