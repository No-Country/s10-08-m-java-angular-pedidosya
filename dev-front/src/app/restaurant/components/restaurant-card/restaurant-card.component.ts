import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RestaurantModel} from "@models/restaurant.model";

import {CurrencyPipe} from "@angular/common";
import {RatingComponent} from "@root/restaurant/components/rating/rating.component";
import {
  DeliveryDetailsCostTimeComponent
} from "@root/restaurant/components/delivery-details-cost-time/delivery-details-cost-time.component";

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RatingComponent, CurrencyPipe, DeliveryDetailsCostTimeComponent],
})
export class RestaurantCardComponent {
  @Input() restaurant!: RestaurantModel


}
