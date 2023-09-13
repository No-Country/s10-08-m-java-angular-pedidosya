import { Component } from '@angular/core'

@Component({
  selector: 'app-food-preferences',
  templateUrl: './food-preferences.component.html',
  styleUrls: ['./food-preferences.component.scss', '../profile-root.scss']
})
export class FoodPreferencesComponent {

  buttonsState:{[key:string]:boolean}={
    hamburguesas: false,
    pizzasYEmpanadas:  false,
    pastas: false,
    sushi: false,
    pescadosYMariscos: false,
    carnesYPollo: false,
    comidaLiviana: false,
    comidaInternacional: false,
    comidaVegana: false,
    helados: false,
    desayunosYMeriendas: false,
  }

  selectFood(food: string): void{
    console.log('llega')
    if (this.buttonsState.hasOwnProperty(food)) {
      this.buttonsState[food] = !this.buttonsState[food];
      console.log(this.buttonsState[food])
    }
  }
}
