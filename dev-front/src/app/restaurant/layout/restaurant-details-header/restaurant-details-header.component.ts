import {Component, Input} from '@angular/core';
import {RatingComponent} from "@root/restaurant/components/rating/rating.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ButtonFavoriteComponent} from "@root/restaurant/components/button-favorite/button-favorite.component";
import {ButtonNavBackComponent} from "@root/restaurant/components/button-nav-back/button-nav-back.component";

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
    ButtonNavBackComponent
  ]
})
export class RestaurantDetailsHeaderComponent {
  @Input() productImageUrl!: string;
  @Input() logoUrl!: string
  @Input() title!: string
  @Input() isFavorite!: boolean
  @Input() rating!: number

}
