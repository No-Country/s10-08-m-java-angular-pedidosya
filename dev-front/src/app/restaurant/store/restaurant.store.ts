import {Restaurant} from "@models/restaurant.model";
import {INITIAL_FILTER_STATE, RestaurantFilter} from "@shared/filters/restaurant-filter.interface";
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
  filtersSelected: {...INITIAL_FILTER_STATE},
  isLoading: false,
  sortedBy: RestaurantSortedBy.Recommended,
  error: null
};


