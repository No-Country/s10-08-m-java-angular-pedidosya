import {createFeatureSelector, createSelector} from "@ngrx/store";
import {OrderState} from "@root/restaurant/store/order.state";



export const selectOrderState = createFeatureSelector<OrderState>('order');


export const selectCart = createSelector(
  selectOrderState,
  (state: OrderState) => state.cart
);
export const selectOrderStatus = createSelector(
  selectOrderState,
  (state: OrderState) => state.status
);

export const selectLoading = createSelector(
  selectOrderState,
  (state: OrderState) => state.isLoading
);

export const selectError = createSelector(
  selectOrderState,
  (state: OrderState) => state.error
);
