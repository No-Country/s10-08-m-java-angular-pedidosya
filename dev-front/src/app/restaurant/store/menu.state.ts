import {Menu} from "@models/menu.model";
import {ProductModel} from "@models/product.model";

export interface MenuState {
  restaurantSelectedId: number | null;
  topSelling: Menu | null;
  discounts: Menu | null;
  others: Menu[] | null;
  products: ProductModel[];
  productSelectedId: number|null;
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}


export const INITIAL_STATE: MenuState = {
  restaurantSelectedId: null,
  topSelling: null,
  searchTerm: '',
  products: [],
  productSelectedId: null,
  discounts: null,
  others: null,
  isLoading: false,
  error: null
};

