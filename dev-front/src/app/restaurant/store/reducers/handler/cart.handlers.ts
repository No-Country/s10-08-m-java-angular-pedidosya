import {Restaurant} from "@models/restaurant.model";
import {Cart} from "@models/cart.model";
import {OrderStatus} from "@models/AllTypes.enum";
import {ItemModel} from "@models/item.model";
import {OrderState} from "@root/restaurant/store/order.state";


export const handleNewCart = (state: OrderState, {restaurant}: { restaurant: Restaurant }): OrderState => {
  let newCart = new Cart(restaurant, [])

  if (state.cart === null) {
    return {
      ...state,
      status: OrderStatus.NEW,
      error: null,
      cart: newCart,
    }
  }

  if (state.status === OrderStatus.NEW) {
    return {
      ...state,
      error: null,
      cart: newCart,
    }
  }


  if (state.cart.restaurant.id === restaurant.id) {
    return {
      ...state,
      error: null,
    }
  }


  return {
    ...state,
    error: "Tienes un pedido pendiente"
  }


}


export const handleAddItem = (
  state: OrderState,
  {item}: { item: ItemModel }
): OrderState => {

  let cartUpdated: Cart | undefined;
  if (state.cart) {
    cartUpdated = state.cart.addItem(item);
  }


  return cartUpdated !== undefined ? {...state, cart: cartUpdated, status: OrderStatus.IS_ORDERING} : {...state};

};


export const handleRemoveItem = (state: OrderState, {item}: { item: ItemModel }): OrderState => {

  let cartUpdated: Cart | undefined;


  if (state.cart) {
    cartUpdated = state.cart.removeItemByProduct(item.product);
  }

  if (cartUpdated !== undefined) {
    return {
      ...state,
      cart: cartUpdated,
      status: cartUpdated.hasItems() ? OrderStatus.IS_ORDERING : OrderStatus.NEW
    }
  }


  return {...state};

};

export const handleSetOrderStatus = (state: OrderState, {status}: { status: OrderStatus }): OrderState => {
  return {
    ...state,
    status
  };

};
