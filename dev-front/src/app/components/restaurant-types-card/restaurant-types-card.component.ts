import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-types-card',
  templateUrl: './restaurant-types-card.component.html',
  styleUrls: ['./restaurant-types-card.component.scss']
})
export class RestaurantTypesCardComponent {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() backgroundColor: string = '';
}
