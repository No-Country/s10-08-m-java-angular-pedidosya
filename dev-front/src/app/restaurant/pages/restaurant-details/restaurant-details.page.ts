import {Component} from '@angular/core';
import {
  RestaurantDetailsHeaderComponent
} from "@root/restaurant/layout/restaurant-details-header/restaurant-details-header.component";
import {
  RestaurantDeliveryInfoComponent
} from "@root/restaurant/components/restaurant-delivery-info/restaurant-delivery-info.component";
import {SearchInputComponent} from "@root/restaurant/components/search-input/search-input.component";

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
  standalone: true,
  imports: [
    RestaurantDetailsHeaderComponent,
    RestaurantDeliveryInfoComponent,
    SearchInputComponent
  ]
})
export class RestaurantDetailsPage {

}
