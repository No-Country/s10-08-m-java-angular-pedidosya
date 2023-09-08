import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {catchError, exhaustMap, map, of} from "rxjs";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";
import {RestaurantService} from "@services/restaurant.service";

@Injectable({
  providedIn: "root"
})
export class RestaurantEffects {

  // noinspection TypeScriptValidateTypes
  loadRestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantsActions.loadRestaurants),
      exhaustMap(() => this.restaurantService.getAll()
        .pipe(
          map((restaurants) => (RestaurantsActions.restaurantsLoadedSuccess({restaurants: restaurants}))),
          catchError(error => of(RestaurantsActions.resturantsLoadedError({error: error})))
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
