import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RestaurantsActions} from '@root/restaurant/store/actions/restaurants.actions';
import {selectIsLoading, selectRestaurants} from '@root/restaurant/store/selectors/restaurants.selector';
import {Router} from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import {RestaurantModel} from "@models/restaurant.model";
import {RestaurantHeaderComponent} from "@root/restaurant/layout/restaurant-header/restaurant-header.component";
import {RestaurantDeckComponent} from "@root/restaurant/components/restaurant-deck/restaurant-deck.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RestaurantFilterService} from "@services/restaurant-filter.service";
import {RestaurantSorterService} from "@services/restaurant-sorter.service";

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
  standalone: true,
  imports: [
    RestaurantHeaderComponent,
    RestaurantDeckComponent,
    AsyncPipe,
    MatProgressSpinnerModule,
    NgIf
  ]
})
export class RestaurantPage implements OnInit {
  title: string = 'Hamburguesa';
  restaurants$: Observable<RestaurantModel[]>;
  loading$: Observable<boolean>

  constructor(private store: Store, private router: Router, private restaurantFilter: RestaurantFilterService, private restaurantSorter: RestaurantSorterService) {
    this.restaurants$ = this.store.select(selectRestaurants);
    this.loading$ = this.store.select(selectIsLoading)
  }

  ngOnInit(): void {
    this.store.dispatch(RestaurantsActions.loadRestaurants());

    this.restaurants$ = this.store.select(selectRestaurants).pipe(
      switchMap((restaurants) => {
        return this.restaurantFilter.applyFilter(restaurants).pipe(
          switchMap((filteredRestaurants) => {
            return this.restaurantSorter.applySort(filteredRestaurants);
          })
        );
      })
    );

    this.loading$ = this.store.select(selectIsLoading);
  }
}
