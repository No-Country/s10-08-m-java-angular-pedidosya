import {Component, Input} from '@angular/core';
import {RestaurantCardComponent} from "@root/restaurant/components/restaurant-card/restaurant-card.component";
import {RestaurantModel} from "@models/restaurant.model";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-restaurant-deck',
  templateUrl: './restaurant-deck.component.html',
  styleUrls: ['./restaurant-deck.component.scss'],
  standalone: true,
  imports: [
    RestaurantCardComponent,
    NgIf,
    NgForOf
  ]
})
export class RestaurantDeckComponent {
  @Input() title!: string
  @Input() restaurants!: RestaurantModel[] | null
}
