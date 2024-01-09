import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
      this.peliculasEnCine= [{
        titulo: 'Spider-Man - Far From Home',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/Spider-Man-FarFromHome-rating.jpg?itok=CGe-MMMn'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster:'https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg'
      }]
  }
  peliculasEnCine;
  peliculasProximosEstrenos= []

}
