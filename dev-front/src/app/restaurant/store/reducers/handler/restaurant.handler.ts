import {Restaurant} from "@models/restaurant.model";
import {RestaurantState} from "@root/restaurant/store/restaurant.state";

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

export const handleLoadRestaurantsSuccess = (state: RestaurantState, {restaurants}: { restaurants: Restaurant[] }): RestaurantState => {
  return {
    ...state,
    restaurants: restaurants,
    isLoading: false,
    error: null
  }
}


export const handleLoadRestaurantsFailure = (state: RestaurantState, {error}: { error: string }): RestaurantState => {
  return {
    ...state,
    restaurants: [],
    isLoading: false,
    error: error
  }
}



