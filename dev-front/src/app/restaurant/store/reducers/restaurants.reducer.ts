import {createReducer, on} from "@ngrx/store";

import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";
import {
  handleLoadRestaurants,
  handleLoadRestaurantsFailure,
  handleLoadRestaurantsSuccess
} from "@root/restaurant/store/reducers/handler/restaurant.handler";
import {
  handleResetRestaurantFilter, handleUpdateRestaurantCustomFilter,
  handleUpdateRestaurantFilter, handleUpdateRestaurantSortedBy
} from "@root/restaurant/store/reducers/handler/filter-restaurant.handler";
import {INITIAL_STATE} from "@root/restaurant/store/restaurant.state";


/*
* Los reducer son los que modifican realmente el store. Toman las acciones solicitadas y las tratan con un handler
* Nota: tener un handler es opcional.
* */

export const restaurantsReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(RestaurantsActions.loadRestaurants, handleLoadRestaurants),
  on(RestaurantsActions.restaurantsLoadedSuccess, handleLoadRestaurantsSuccess),
  on(RestaurantsActions.resturantsLoadedError, handleLoadRestaurantsFailure),
  on(RestaurantsActions.updateRestaurantFilter, handleUpdateRestaurantFilter),
  on(RestaurantsActions.updateRestaurantCustomFilter, handleUpdateRestaurantCustomFilter),
  on(RestaurantsActions.updateRestaurantSortedBy, handleUpdateRestaurantSortedBy),
  on(RestaurantsActions.resetRestaurantFilter, handleResetRestaurantFilter),
);
