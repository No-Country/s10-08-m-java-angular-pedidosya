import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Restaurant} from "@models/restaurant.model";
import {map, Observable, of, switchMap} from "rxjs";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";
import {
  selectIsLoading,
  selectRestaurants,
  selectRestaurantsType,
} from "@root/restaurant/store/selectors/restaurants.selector";
import {RestaurantFilterService} from "@services/restaurant-filter.service";
import {RestaurantSorterService} from "@services/restaurant-sorter.service";
import {RestaurantTypeModel} from "@models/restaurant-type.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantFacade {

  restaurantsType$: Observable<RestaurantTypeModel> = this._store.select(selectRestaurantsType)
  restaurants$: Observable<Restaurant[]> = this._store.select(selectRestaurants)
  isLoading$: Observable<boolean> = this._store.select(selectIsLoading)


  filteredAndSortedRestaurants$: Observable<Restaurant[]> = this.restaurants$.pipe(
    switchMap((restaurants) => this._restaurantFilterService.applyFilter(restaurants)),
    switchMap((filteredRestaurants) => this._restaurantSorterService.applySort(filteredRestaurants))
  );

  constructor(private _store: Store, private _restaurantFilterService: RestaurantFilterService, private _restaurantSorterService: RestaurantSorterService) {
  }

  setRestaurantsType(restaurantType: RestaurantTypeModel) {
    this._store.dispatch(RestaurantsActions.setRestaurantType({restaurantsType: restaurantType}));
  }

  loadRestaurants(): void {
    this._store.dispatch(RestaurantsActions.loadRestaurants());
  }

  getRestaurantById(id$: Observable<number | null>): Observable<Restaurant | null> {
    return id$.pipe(
      switchMap(id => {
        if (id === null)
          return of(null);
        return this.restaurants$.pipe(
          map(restaurants => {
            const restaurant = restaurants.find(restaurant => restaurant.id === id);
            return restaurant !== undefined ? restaurant : null;
          })
        );
      })
    );
  }

  toogleFavorite(restaurant: Restaurant) {
    this._store.dispatch(RestaurantsActions.loadSelectFavoriteRestaurant({
      isFavorite: !restaurant.favorite,
      restaurant: restaurant
    }));
  }

}
