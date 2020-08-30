import { Component, OnInit, Input } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  @Input() libros=[]  //este array va a recibir LOS NUEVOS LIBROS cargados del formulario  atraves del CONTENDOR


  constructor(private librosService:LibrosService) { }

  ngOnInit(): void {
  }
  
//tomamos los valores para actualizar  la persona aquien se lo prestamos
cambiarLended(idLibro){
    
    let lended=(<HTMLInputElement>document.getElementById(idLibro)).value;

      this.librosService.actualizarLended(idLibro, lended);
     
}



}