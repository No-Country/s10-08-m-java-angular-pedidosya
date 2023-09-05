import {Menu} from "@models/menu.model";
import {MenuState} from "@root/restaurant/store/menu.state";


export const handleSetSelectedRestaurant = (state: MenuState, {restaurantSelectedId}: { restaurantSelectedId: number | null; }): MenuState => {
  return {
    ...state,
    restaurantSelectedId
  }
}


export const handleLoadMenus = (state: MenuState): MenuState => {
  return {
    ...state,
    isLoading: true
  }
}

export const handleLoadMenusSuccess = (state: MenuState, {
  discounts,
  topSelling,
  others
}: { discounts: Menu | null, topSelling: Menu | null, others: Menu[] | null }): MenuState => {
  return {
    ...state,
    discounts,
    topSelling,
    others,
    isLoading: false,
    error: null
  }
}


export const handleLoadMenusFailure = (state: MenuState, {error}: { error: string }): MenuState => {
  return {
    ...state,
    others: [],
    discounts: null,
    topSelling: null,
    isLoading: false,
    error: error
  }
}

export const handleUpdateSearchTerm = (state: MenuState, {searchTerm}: { searchTerm: string }): MenuState => {
  return {
    ...state,
    searchTerm
  }
}
