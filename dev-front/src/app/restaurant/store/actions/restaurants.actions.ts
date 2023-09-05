import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Restaurant} from "@models/restaurant.model";
import {RestaurantCustomFilter, RestaurantFilter} from "@shared/filters/restaurant-filter.interface";
import {RestaurantSortedBy} from "@shared/enums/restaurant-sorted-by";


export const RestaurantsActions = createActionGroup({
  source: 'Restaurants',
  events: {
    'Load Restaurants': emptyProps(),
    'Restaurants Loaded Success': props<{ restaurants: Restaurant[] }>(),
    'Resturants Loaded Error': props<{ error: string }>(),
    'Update Restaurant Filter': props<{ filtersSelected: Partial<RestaurantFilter> }>(),
    'Update Restaurant Custom Filter': props<{ filtersCustom: Partial<RestaurantCustomFilter> }>(),
    'Update Restaurant Sorted By': props<{ sortedBy: RestaurantSortedBy }>(),
    'Reset Restaurant Filter': emptyProps(),
  },
});
