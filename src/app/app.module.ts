import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { NuevolibroComponent } from './nuevolibro/nuevolibro.component';
import { LibreriaComponent } from './libreria/libreria.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    NuevolibroComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
