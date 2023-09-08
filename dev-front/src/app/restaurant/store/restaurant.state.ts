import {Restaurant} from "@models/restaurant.model";
import {INITIAL_RESTAURANT_FILTER, RestaurantFilter} from "@shared/filters/restaurant-filter.interface";
import {RestaurantSortedBy} from "@shared/enums/restaurant-sorted-by";

//DATOS DEL STORE
export interface RestaurantState {
  restaurants: Restaurant[];
  filtersSelected: RestaurantFilter;
  sortedBy: RestaurantSortedBy;
  isLoading: boolean;
  error: string | null;
}


export const INITIAL_STATE: RestaurantState = {
  restaurants: <Restaurant[]>[],
  filtersSelected: {...INITIAL_RESTAURANT_FILTER},
  isLoading: false,
  sortedBy: RestaurantSortedBy.Recommended,
  error: null
};


