import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonFavoriteComponent} from "@shared/components/button-favorite/button-favorite.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RatingComponent} from "@shared/components/rating/rating.component";
import {Restaurant} from "@models/restaurant.model";
import {RestaurantFacade} from "@root/restaurant/store/facades/restaurant.facade";

@Component({
  selector: 'app-restaurant-details-card',
  standalone: true,
  imports: [CommonModule, ButtonFavoriteComponent, MatIconModule, MatButtonModule, RatingComponent],
  templateUrl: './restaurant-details-card.component.html',
  styleUrls: ['./restaurant-details-card.component.scss']
})
export class RestaurantDetailsCardComponent {
  @Input() restaurant!: Restaurant;

  constructor(private _restaurantFacade: RestaurantFacade) {
  }

  setSelectedFavorite(event: Event) {
    event.stopPropagation();
    this._restaurantFacade.toogleFavorite(this.restaurant)
  }
}
