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

export const handleLoadMenusSuccess = (state: MenuState, {
  discounts,
  topSelling,
  others
}: { discounts: Menu | null, topSelling: Menu | null, others: Menu[] | null }): MenuState => {
  let allProductsOthers: ProductModel[] = [];
  let allProducts: ProductModel[] = [];

  if (others) {
    allProductsOthers = others.flatMap(value => value.products);
  }

  if (discounts?.products) {
    allProducts = allProducts.concat(discounts.products);
  }

  if (topSelling?.products) {
    allProducts = allProducts.concat(topSelling.products);
  }

  allProducts = allProducts.concat(allProductsOthers);

  return {
    ...state,
    discounts,
    topSelling,
    products: allProducts,
    others,
    isLoading: false,
    error: null
  };
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

export const handleSetProductSelectedId = (state: MenuState, {productSelectedId}: { productSelectedId: number | null; }): MenuState => {
  return {
    ...state,
    productSelectedId
  }
}

