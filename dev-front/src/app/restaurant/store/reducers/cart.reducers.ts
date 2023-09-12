import {createReducer, on} from "@ngrx/store";
import {INITIAL_STATE} from "@root/restaurant/store/order.state";

import {
  handleAddItem,
  handleNewCart,
  handleRemoveItem
} from "@root/restaurant/store/reducers/handler/cart.handlers";
import {OrderActions} from "@root/restaurant/store/actions/orderActions";


export const orderReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(OrderActions.newCart, handleNewCart),
  on(OrderActions.addItem, handleAddItem),
  on(OrderActions.deleteItem, handleRemoveItem),
);
