import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RestaurantState} from "@root/restaurant/store/restaurant.store";


/*
* Los selectores son para obtener informacion del store.
*
* */

//Con esta constante generamos el "store" este debe ser el que se importe en x.module.ts
export const selectRestaurantsState = createFeatureSelector<RestaurantState>('restaurants');

export const selectRestaurants = createSelector(
  selectRestaurantsState,
  (state: RestaurantState) => state.restaurants
);

export const selectIsLoading = createSelector(
  selectRestaurantsState,
  (state: RestaurantState) => state.isLoading
);

export const selectError = createSelector(
  selectRestaurantsState,
  (state: RestaurantState) => state.error
);

export const selectFilterSelected = createSelector(
  selectRestaurantsState,
  (state: RestaurantState) => state.filtersSelected
);

export const selectSortedBy = createSelector(
  selectRestaurantsState,
  (state: RestaurantState) => state.sortedBy
);
