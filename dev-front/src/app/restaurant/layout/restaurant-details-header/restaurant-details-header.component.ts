import { Component } from '@angular/core';
import {RatingComponent} from "@root/restaurant/components/rating/rating.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-restaurant-details-header',
  templateUrl: './restaurant-details-header.component.html',
  styleUrls: ['./restaurant-details-header.component.scss'],
  standalone:true,
  imports: [
    RatingComponent,
    MatIconModule
  ]
})
export class RestaurantDetailsHeaderComponent {

  imageUrl: string = "assets/mocks/brand_bk.png";

}
