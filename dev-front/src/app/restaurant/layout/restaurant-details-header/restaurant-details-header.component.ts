import {Component, Input} from '@angular/core';
import {RatingComponent} from "@root/restaurant/components/rating/rating.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-restaurant-details-header',
  templateUrl: './restaurant-details-header.component.html',
  styleUrls: ['./restaurant-details-header.component.scss'],
  standalone: true,
  imports: [
    RatingComponent,
    MatIconModule,
    MatButtonModule
  ]
})
export class RestaurantDetailsHeaderComponent {
  @Input() productImageUrl!: string;
  @Input() logoUrl!: string
  @Input() title!: string
  @Input() isFavorite!: boolean
  @Input() rating!: number

}
