import {RestaurantState} from "@root/restaurant/store/restaurant.store";
import {RestaurantModel} from "@models/restaurant.model";

/*
* Los handler es opcional, se utilizo para tener separado estos cambios.
* Aca podemos ver como cambia o se pisa nuestro store con las cosas nuevas.
*
* */

export const handleLoadRestaurants = (state: RestaurantState): RestaurantState => {
  return {
    ...state,
    isLoading: true
  }
}

export const handleLoadRestaurantsSuccess = (state: RestaurantState, {restaurants}: { restaurants: RestaurantModel[] }): RestaurantState => {
  return {
    restaurants: restaurants,
    isLoading: false,
    error: null
  }
}


export const handleLoadRestaurantsFailure = (state: RestaurantState, {error}: { error: string }): RestaurantState => {
  return {
    restaurants: [],
    isLoading: false,
    error: error
  }
}
