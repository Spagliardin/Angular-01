import { DbzService } from './../services/dbz.service';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Personaje } from './../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private DbzService: DbzService) {

  }

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.DbzService.agregarPersonaje(this.nuevo)
    // console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
