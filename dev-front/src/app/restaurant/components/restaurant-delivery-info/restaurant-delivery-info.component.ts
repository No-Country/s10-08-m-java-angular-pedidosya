import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-restaurant-delivery-info',
  templateUrl: './restaurant-delivery-info.component.html',
  styleUrls: ['./restaurant-delivery-info.component.scss'],
  standalone: true,
  imports: []
})
export class RestaurantDeliveryInfoComponent {
  @Input() minTime!: number;
  @Input() maxTime!: number;
  @Input() deliveryCost!: number;
  @Input() minToOrder!: number;


  costDisplay(cost: number): string {
    return cost === 0 ? 'Gratis' : `$${cost}`;
  }


}
