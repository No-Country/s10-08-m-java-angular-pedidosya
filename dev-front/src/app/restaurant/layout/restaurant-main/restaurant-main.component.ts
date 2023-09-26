import {Component, Input} from '@angular/core';
import {RestaurantCardComponent} from "@root/restaurant/components/restaurant-card/restaurant-card.component";
import {Restaurant} from "@models/restaurant.model";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {RestaurantFacade} from "@root/restaurant/store/facades/restaurant.facade";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {RestaurantTypeModel} from "@models/restaurant-type.model";

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
  @Input() restaurantType!: RestaurantTypeModel | null
  @Input() restaurants!: Restaurant[] | null

  constructor(private _router: Router, private _restaurantFacade: RestaurantFacade, private _menuFacade: MenuFacade, private _cartFacade: CartFacade) {
  }

  showRestaurant(restaurant: Restaurant) {

    this._menuFacade.restaurantSelected(restaurant.id)
    this._cartFacade.initCart(restaurant)
    this._router.navigate(['/restaurant/details']);
  }

}
