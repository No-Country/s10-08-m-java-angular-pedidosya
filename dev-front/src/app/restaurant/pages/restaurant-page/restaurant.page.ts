import {Component, OnInit} from '@angular/core';
import {RestaurantCardComponent} from "@root/restaurant/components/restaurant-card/restaurant-card.component";
import {RestaurantDeckComponent} from "@root/restaurant/components/restaurant-deck/restaurant-deck.component";
import {RestaurantHeaderComponent} from "@root/restaurant/layout/restaurant-header/restaurant-header.component";
import {Store} from "@ngrx/store";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";
import {selectRestaurants} from "@root/restaurant/store/selectors/restaurants.selector";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
  standalone: true,
  imports: [RestaurantCardComponent, RestaurantDeckComponent, RestaurantHeaderComponent, AsyncPipe]
})
export class RestaurantPage implements OnInit {

  title: string = "Hamburguesa"
  restaurants$ = this.store.select(selectRestaurants);


  constructor(private store: Store) {

  }


  ngOnInit(): void {
    this.store.dispatch(RestaurantsActions.loadRestaurants())
  }


}
