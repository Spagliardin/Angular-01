import { Component } from '@angular/core';

import { Personaje } from './../interfaces/dbz.interface';

import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // personajes:Personaje[] = []

  nuevo: Personaje = {
    nombre: 'Maestro joji',
    poder: 1000,
  };

  constructor() {}

  // public get personajes() : Personaje[] {
  //   return this.DbzService.personajes
  // }

  // agregarNuevoPersonaje( argumento:Personaje ){
  //   this.personajes.push(argumento)
  // }

  // constructor(public DbzService: DbzService){
  //   this.personajes = this.DbzService.personajes
  // }
}
