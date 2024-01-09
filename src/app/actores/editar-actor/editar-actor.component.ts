import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';
import { generoCreacionDTO } from 'src/app/generos/genero';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  constructor(private activedRoute: ActivatedRoute){

  }

  modelo:actorDTO = {
    nombre:'Felipe',
    fechaNacimiento: new Date(),
    foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'
  };

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
     // alert(params.id);
    })
  }

  guardarCambios(actor:generoCreacionDTO){
    console.log(actor);
    // this.router.navigate(['/actores']);

  }

}
