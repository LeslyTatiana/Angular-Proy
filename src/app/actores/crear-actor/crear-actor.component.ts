import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent {
  constructor(
    // private router:Router
    ){}

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
    // this.router.navigate(['/actores']);
  }
}
