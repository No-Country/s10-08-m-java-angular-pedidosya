import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Restaurant} from "@models/restaurant.model";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RestaurantMainComponent} from "@root/restaurant/layout/restaurant-main/restaurant-main.component";
import {RestaurantHeaderComponent} from "@root/restaurant/layout/restaurant-header/restaurant-header.component";
import {RestaurantFacade} from "@root/restaurant/store/facades/restaurant.facade";


@Component({
  selector: 'app-restaurant-pages',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
  standalone: true,
  imports: [
    RestaurantHeaderComponent,
    RestaurantMainComponent,
    AsyncPipe,
    MatProgressSpinnerModule,
    NgIf,
  ]
})
export class RestaurantPage implements OnInit {
  title: string = 'Hamburguesa';
  restaurants$: Observable<Restaurant[]>;
  loading$: Observable<boolean>

  constructor(private router: Router, private _restaurantFacade: RestaurantFacade) {
    this.restaurants$ = _restaurantFacade.filteredAndSortedRestaurants$;
    this.loading$ = _restaurantFacade.isLoading$;
  }

  ngOnInit(): void {
    this._restaurantFacade.loadRestaurants();
    this.loading$ = this._restaurantFacade.isLoading$;
  }
}
