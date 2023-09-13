import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CurrencyPipe} from "@angular/common";
import {
  DeliveryDetailsCostTimeComponent
} from "@root/restaurant/components/delivery-details-cost-time/delivery-details-cost-time.component";
import {ButtonFavoriteComponent} from "@shared/components/button-favorite/button-favorite.component";
import {Restaurant} from "@models/restaurant.model";
import {Component, Input} from "@angular/core";
import {RatingComponent} from "@shared/components/rating/rating.component";
import {RestaurantFacade} from "@root/restaurant/store/facades/restaurant.facade";

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RatingComponent, CurrencyPipe, DeliveryDetailsCostTimeComponent, ButtonFavoriteComponent],
})
export class RestaurantCardComponent {
  @Input() restaurant!: Restaurant;

  constructor(private _restaurantFacade: RestaurantFacade) {
  }

  setSelectedFavorite(event:Event) {
    event.stopPropagation();
    this._restaurantFacade.toogleFavorite(this.restaurant)
  }

}
