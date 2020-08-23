import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  @Input() libros=[]  //este array va a recibir LOS NUEVOS LIBROS cargados del formulario  atraves del CONTENDOR

  constructor() { }

  ngOnInit(): void {
  }

}
