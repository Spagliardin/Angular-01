import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
})
export class ListadoComponent {

    heroes        : string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];
    heroesBorrados: string = ''

    // heroeBorrado():boolean {
    //   if (this.heroesBorrados.length > 0) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }

    borrarHeroe():void {
      this.heroesBorrados = this.heroes.shift() || ''
    }

    

}
