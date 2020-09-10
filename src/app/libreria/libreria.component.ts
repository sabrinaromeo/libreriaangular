import {Component, OnInit, Input} from '@angular/core';
import {LibrosService} from '../libros.service';

@Component
  ({
    selector: 'app-libreria',
    templateUrl: './libreria.component.html',
    styleUrls: ['./libreria.component.css']
  })
export class LibreriaComponent implements OnInit
{
  // Este array va a recibir LOS NUEVOS LIBROS cargados del formulario  atraves del CONTENDOR
  @Input() libros = []

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void
  {

  }

  /**
   * Se toman los valores para actualizar la persona a quien se lo prestamos.
   * @param idLibro 
   */
  cambiarLended(idLibro)
  {
    let lended = (<HTMLInputElement>document.getElementById(idLibro)).value;
    this.librosService.actualizarLended(idLibro, lended);
  }
}