import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonFavoriteComponent} from "@shared/components/button-favorite/button-favorite.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RatingComponent} from "@shared/components/rating/rating.component";
import {RestaurantModel} from "@models/restaurant.model";

@Component({
  selector: 'app-restaurant-details-card',
  standalone: true,
  imports: [CommonModule, ButtonFavoriteComponent, MatIconModule, MatButtonModule, RatingComponent],
  templateUrl: './restaurant-details-card.component.html',
  styleUrls: ['./restaurant-details-card.component.scss']
})
export class RestaurantDetailsCardComponent {
  @Input() restaurant!: RestaurantModel;

}
