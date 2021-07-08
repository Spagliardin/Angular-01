import { Personaje } from './../interfaces/dbz.interface';
import { DbzService } from './../services/dbz.service';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{

  // @Input('data') personajes:Personaje[] = []

  
  public get personajes():Personaje[]{
    return this.DbzService.personajes
  }

  constructor(private DbzService:DbzService){

  }

  
}
