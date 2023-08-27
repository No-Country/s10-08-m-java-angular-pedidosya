import {RestaurantModel} from "@models/restaurant.model";

//DATOS DEL STORE
export interface RestaurantState {
  restaurants: RestaurantModel[];
  //buscarPorNombre:string;
  isLoading: boolean;
  error: string | null;
}

//ESTADO INICIAL
export const initialState: RestaurantState = {
  restaurants: [],
  isLoading: false,
  error: null
};
