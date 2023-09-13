import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Restaurant} from "@models/restaurant.model";
import {RestaurantCustomFilter, RestaurantFilter} from "@shared/filters/restaurant-filter.interface";
import {RestaurantSortedBy} from "@shared/enums/restaurant-sorted-by";
import {RestaurantTypeModel} from "@models/restaurant-type.model";


export const RestaurantsActions = createActionGroup({
  source: 'Restaurants',
  events: {
    //Selected RestaurantType
    'Set Restaurant Type': props<{ restaurantsType: RestaurantTypeModel }>(),
    //Load
    'Load Restaurants': emptyProps(),
    'Restaurants Loaded Success': props<{ restaurants: Restaurant[] }>(),
    'Resturants Loaded Error': props<{ error: string }>(),
    //Filters
    'Update Restaurant Filter': props<{ filtersSelected: Partial<RestaurantFilter> }>(),
    'Update Restaurant Custom Filter': props<{ filtersCustom: Partial<RestaurantCustomFilter> }>(),
    'Update Restaurant Sorted By': props<{ sortedBy: RestaurantSortedBy }>(),
    'Reset Restaurant Filter': emptyProps(),
    //Favorites
    'Load Select Favorite Restaurant': props<{ restaurant: Restaurant, isFavorite: boolean }>(),
    'Select Favorite Restaurant Success': emptyProps(),
    'Select Favorite Restaurant Error': props<{ error: string }>(),
  },
});
