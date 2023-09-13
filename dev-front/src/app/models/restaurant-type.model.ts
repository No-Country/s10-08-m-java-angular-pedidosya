export interface RestaurantTypeModel {
  idStoreType: number,
  title: string,
  image_path: string | null
}

export const INITIAL_RESTAURANT_TYPE: RestaurantTypeModel = {
  //TODO: NO HARDCODEAR?... ESO ESTA MAL... PERO NO TAN MAL
  idStoreType: 1,
  title: 'Restaurante',
  image_path: null
}
