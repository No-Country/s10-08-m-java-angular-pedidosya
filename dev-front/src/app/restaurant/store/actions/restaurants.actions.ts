import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {RestaurantModel} from "@models/restaurant.model";


/*
*  Las acciones son los que nos permiten solicitar cambios al store.
*
* */
export const RestaurantsActions = createActionGroup({
  source: 'Restaurants',
  events: {
    'Load Restaurants': emptyProps(),
    'Restaurants Loaded Success': props<{ restaurants: RestaurantModel[] }>(),
    'Resturants Loaded Error': props<{ error: string }>(),
  },
});
