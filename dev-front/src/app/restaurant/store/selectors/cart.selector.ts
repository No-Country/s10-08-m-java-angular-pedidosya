import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CartState} from "@root/restaurant/store/cart.state";

export const selectCartState = createFeatureSelector<CartState>('cart');


export const selectCart = createSelector(
  selectCartState,
  (state: CartState) => state.cart
);

export const selectLoading = createSelector(
  selectCartState,
  (state: CartState) => state.isLoading
);

export const selectError = createSelector(
  selectCartState,
  (state: CartState) => state.error
);
