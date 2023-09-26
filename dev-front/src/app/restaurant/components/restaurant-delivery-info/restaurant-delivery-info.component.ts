import {Component, Input} from '@angular/core';
import {RestaurantModel} from "@models/restaurant.model";

@Component({
  selector: 'app-restaurant-delivery-info',
  templateUrl: './restaurant-delivery-info.component.html',
  styleUrls: ['./restaurant-delivery-info.component.scss'],
  standalone: true,
  imports: []
})
export class RestaurantDeliveryInfoComponent {
  @Input() restaurant!: RestaurantModel;


  costDisplay(cost: number): string {
    return cost === 0 ? 'Gratis' : `$${cost}`;
  }


}
