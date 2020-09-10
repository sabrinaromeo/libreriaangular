import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LibrosService} from '../libros.service';
import {GeneroService} from '../genero.service';

@Component
  ({
    selector: 'app-nuevolibro',
    templateUrl: './nuevolibro.component.html',
    styleUrls: ['./nuevolibro.component.css']
  })
export class NuevolibroComponent implements OnInit
{
  //el @OUTPUT dispara un aviso al padre(contenedor) que tengo un nuevo libro para pasarle al Servidor
  @Output() nuevoLibro = new EventEmitter();

  book =
    {
      id: '',
      name: '',
      gender: '',
      author: '',
      lended: ''
    };

  genders: any;

  constructor(private librosService: LibrosService, private generoService: GeneroService) {}

  async ngOnInit()
  {
    this.genders = await this.generoService.listaGeneros();
  }

  async agregarLibro()
  {
    // este metodo se da apartir del click del usuario
    await this.librosService.guardarLibro(this.book);//my la mando al METODO DEL SERVICE(POST) que genere para guardar los libros que ingresa el usuario
    // este emiter le avisa al padre que hay un nuevo libro (book) cagado por el usuario
    this.nuevoLibro.emit();
  }
}
