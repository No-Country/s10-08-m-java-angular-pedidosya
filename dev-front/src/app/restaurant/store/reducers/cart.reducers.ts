import {createReducer, on} from "@ngrx/store";
import {INITIAL_STATE} from "@root/restaurant/store/cart.state";
import {CartActions} from "@root/restaurant/store/actions/cart.actions";
import {
  handleAddItem,
  handleNewCart,
  handleRemoveItem
} from "@root/restaurant/store/reducers/handler/cart.handlers";


export const cartReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(CartActions.newCart, handleNewCart),
  on(CartActions.addItem, handleAddItem),
  on(CartActions.deleteItem, handleRemoveItem),

);
