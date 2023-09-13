import {Menu} from "@models/menu.model";
import {MenuState} from "@root/restaurant/store/menu.state";
import {ProductModel} from "@models/product.model";


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

export const handleLoadMenusSuccess = (state: MenuState, {others}: { others: Menu[] | null }): MenuState => {
  let allProductsOthers: ProductModel[] = [];
  let allProducts: ProductModel[] = [];

  if (others) {
    allProductsOthers = others.flatMap(value => value.products);
  }
  allProducts = allProducts.concat(allProductsOthers);

  return {
    ...state,
    products: allProducts,
    others,
    isLoading: false,
    error: null
  };
}

export const handleLoadTopMenuSuccess = (state: MenuState, {topSelling}: { topSelling: Menu | null }): MenuState => {
  if (topSelling) {
    return {
      ...state,
      topSelling,
      isLoading: false,
      error: null
    }
  }

  return {
    ...state,
    topSelling: new Menu(0, 'Más vendidos', []),
    isLoading: false,
    error: null
  }
}

export const handleLoadDiscountsSuccess = (state: MenuState, {discounts}: { discounts: Menu | null }): MenuState => {

  if (discounts) {
    return {
      ...state,
      discounts,
      isLoading: false,
      error: null
    }
  }

  return {
    ...state,
    discounts: new Menu(0, 'Descuentos', []),
    isLoading: false,
    error: null
  }
}








export const handleLoadMenusFailure = (state: MenuState, {error}: { error: string }): MenuState => {
  return {
    ...state,
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

export const handleSetProductSelectedId = (state: MenuState, {productSelectedId}: { productSelectedId: number | null; }): MenuState => {
  return {
    ...state,
    productSelectedId
  }
}

