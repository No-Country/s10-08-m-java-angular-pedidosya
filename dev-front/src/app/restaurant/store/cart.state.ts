import {Cart} from "@models/cart.model";

export interface CartState {
  cart: Cart | null;
  isLoading: boolean;
  error: string | null;
}

export const INITIAL_STATE: CartState = {
  cart: null,
  isLoading: false,
  error: null
}
