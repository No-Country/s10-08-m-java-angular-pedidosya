import {createReducer, on} from "@ngrx/store";
import {initialState} from "@root/restaurant/store/restaurant.store";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";
import {
  handleLoadRestaurants,
  handleLoadRestaurantsFailure,
  handleLoadRestaurantsSuccess
} from "@root/restaurant/store/reducers/handler/restaurant.handler";


/*
* Los reducer son los que modifican realmente el store. Toman las acciones solicitadas y las tratan con un handler
* Nota: tener un handler es opcional.
* */

export const restaurantsReducer = createReducer(
  initialState,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(RestaurantsActions.loadRestaurants, handleLoadRestaurants),
  on(RestaurantsActions.restaurantsLoadedSuccess, handleLoadRestaurantsSuccess),
  on(RestaurantsActions.resturantsLoadedError, handleLoadRestaurantsFailure),
);
