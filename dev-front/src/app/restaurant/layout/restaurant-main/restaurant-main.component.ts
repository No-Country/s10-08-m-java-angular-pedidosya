import {Component, Input} from '@angular/core';
import {RestaurantCardComponent} from "@root/restaurant/components/restaurant-card/restaurant-card.component";
import {RestaurantModel} from "@models/restaurant.model";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {RestaurantFacade} from "@root/restaurant/store/facades/restaurant.facade";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";

@Component({
  selector: 'app-restaurant-main',
  templateUrl: './restaurant-main.component.html',
  styleUrls: ['./restaurant-main.component.scss'],
  standalone: true,
  imports: [
    RestaurantCardComponent,
    NgIf,
    NgForOf
  ]
})
export class RestaurantMainComponent {
  @Input() title!: string
  @Input() restaurants!: RestaurantModel[] | null

  constructor(private _router: Router, private _restaurantFacade: RestaurantFacade,private _menuFacade: MenuFacade) {
  }

  showRestaurant(restaurant: RestaurantModel) {
    this._menuFacade.restaurantSelected(restaurant.id)
    const urlRestaurants = '/restaurant/details';
    this._router.navigate([urlRestaurants]);
  }

}
