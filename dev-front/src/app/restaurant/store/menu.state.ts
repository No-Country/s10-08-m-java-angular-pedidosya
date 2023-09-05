import {Menu} from "@models/menu.model";

export interface MenuState {
  restaurantSelectedId: number | null;
  topSelling: Menu | null;
  discounts: Menu | null;
  others: Menu[] | null;
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}


export const INITIAL_STATE: MenuState = {
  restaurantSelectedId: null,
  topSelling: null,
  searchTerm: '',
  discounts: null,
  others: null,
  isLoading: false,
  error: null
};

