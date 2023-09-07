import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ButtonNavBackComponent} from "@shared/components/button-nav-back/button-nav-back.component";
import {ButtonFavoriteComponent} from "@shared/components/button-favorite/button-favorite.component";
import {
  RestaurantDeliveryInfoComponent
} from "@root/restaurant/components/restaurant-delivery-info/restaurant-delivery-info.component";
import {SearchInputComponent} from "@shared/components/search-input/search-input.component";
import {MenuButtonComponent} from "@root/restaurant/components/menu-button/menu-button.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Restaurant} from "@models/restaurant.model";
import {FormsModule} from "@angular/forms";
import {RatingComponent} from "@shared/components/rating/rating.component";
import {
  RestaurantDetailsCardComponent
} from "@root/restaurant/components/restaurant-details-card/restaurant-details-card.component";

@Component({
  selector: 'app-restaurant-details-header',
  templateUrl: './restaurant-details-header.component.html',
  styleUrls: ['./restaurant-details-header.component.scss'],
  standalone: true,
  imports: [
    RatingComponent,
    MatIconModule,
    MatButtonModule,
    ButtonFavoriteComponent,
    ButtonNavBackComponent,
    RestaurantDeliveryInfoComponent,
    SearchInputComponent,
    MenuButtonComponent,
    MatButtonToggleModule,
    FormsModule,
    RestaurantDetailsCardComponent
  ]
})
export class RestaurantDetailsHeaderComponent {
  selectedNavigation = '';
  @Input() restaurant!: Restaurant;



}
