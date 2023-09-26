import {createReducer, on} from "@ngrx/store";
import {INITIAL_STATE} from "@root/restaurant/store/order.state";

import {
  handleAddItem, handleClearErrorMsg,
  handleNewCart,
  handleRemoveItem, handleResetState, handleSendOrder, handleSendOrderError, handleSendSuccess,
  handleSetOrderStatus
} from "@root/restaurant/store/reducers/handler/cart.handlers";
import {OrderActions} from "@root/restaurant/store/actions/order.actions";


export const orderReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(OrderActions.newCart, handleNewCart),
  on(OrderActions.resetCart, handleResetState),
  on(OrderActions.addItem, handleAddItem),
  on(OrderActions.deleteItem, handleRemoveItem),
  on(OrderActions.setOrderStatus, handleSetOrderStatus),

  on(OrderActions.clearErrorMsg, handleClearErrorMsg),


  on(OrderActions.sendOrder, handleSendOrder),
  on(OrderActions.sendOrderSuccess, handleSendSuccess),
  on(OrderActions.sendOrderError, handleSendOrderError),
);
