import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {catchError, concatMap, exhaustMap, map, of, withLatestFrom} from "rxjs";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";
import {RestaurantService} from "@services/restaurant.service";
import {selectRestaurantsType} from "@root/restaurant/store/selectors/restaurants.selector";

@Injectable({
  providedIn: "root"
})
export class RestaurantEffects {

// noinspection TypeScriptValidateTypes
  setRestaurantType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantsActions.setRestaurantType),
      concatMap(() => {
        // Primero, se ejecuta setRestaurantType
        return of(RestaurantsActions.loadRestaurants())
          .pipe(
            catchError(error => of(RestaurantsActions.resturantsLoadedError({error})))
          );
      })
    )
  );


  // noinspection TypeScriptValidateTypes
  loadRestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantsActions.loadRestaurants),
      withLatestFrom(this.store.select(selectRestaurantsType)),
      exhaustMap(([_, restaurantType]) => this.restaurantService.getRestaurantsByType(restaurantType)
        .pipe(
          map((restaurants) => (RestaurantsActions.restaurantsLoadedSuccess({restaurants: restaurants}))),
          catchError(error => of(RestaurantsActions.resturantsLoadedError({error: error})))
        ))
    )
  );

  // noinspection TypeScriptValidateTypes
  selectFavoriteRestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantsActions.loadSelectFavoriteRestaurant),
      exhaustMap(({restaurant, isFavorite}) => this.restaurantService.setFavoriteRestaurant(restaurant.id, isFavorite)
        .pipe(
          map((_) => (RestaurantsActions.loadRestaurants())),
          catchError(error => of(RestaurantsActions.selectFavoriteRestaurantError({error: error})))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private restaurantService: RestaurantService,
  ) {
  }


}
