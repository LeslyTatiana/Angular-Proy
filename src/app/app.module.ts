import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCineComponent } from './cines/indice-cine/indice-cine.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { FormularioCineComponent } from './cines/formulario-cine/formulario-cine.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCineComponent,
    CrearActorComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
