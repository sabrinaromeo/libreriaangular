import {Component, OnInit} from '@angular/core';
import {LibrosService} from '../libros.service';

@Component
  ({
    selector: 'app-contenedor',
    templateUrl: './contenedor.component.html',
    styleUrls: ['./contenedor.component.css']
  })
export class ContenedorComponent implements OnInit
{
  lista: any = [];

  constructor(private LibrosService: LibrosService) {}/*aca hago la inyeccion de dependencia DEL SERVICE LIBROS (libros.service.ts) el prime librosService es el nombre que va a tener en el contendeor y el segundo es el nombre que tiene el service ACA DECIMOS QUE VAMOS A USAR EL SERVICE LIBROS*/

  async ngOnInit()
  {

    this.lista = await this.LibrosService.listaDeLibros();
    /* this.lista es el array declarado mas arriba, y estoy entrando e libros service a la funcion listade libros que es la que BUSCA TODOS MIS LIBROS EN EL SERVIDOR.
    COMO TENGO QUE ESPERAR A QUE EL SERVIDOR REPOSNDA ESTE METODO ES ASINCRONICO*/
  }

  /**
   * Se comunica con el emitter de nuevolibro.ts y que me manda  ese NUEVO LIBRO
   */
  async agregarLibroABiblioteca()
  {
    this.lista = await this.LibrosService.listaDeLibros(); //vuelvo a pedir la lista de libros ya que se actualiza con el nuevo libro ingrsado
  }

}
