import {ProductModel} from "@models/product.model";
import {CartState} from "@root/restaurant/store/cart.state";
import {Restaurant} from "@models/restaurant.model";
import {Cart} from "@models/cart.model";
import {OrderStatus} from "@models/AllTypes.enum";
import {ItemModel} from "@models/item.model";


export const handleNewCart = (state: CartState, {restaurant}: { restaurant: Restaurant }): CartState => {
  let newCart = new Cart(restaurant, [], OrderStatus.NEW)

  if (state.cart === null) {
    return {
      ...state,
      error: null,
      cart: newCart,
    }
  }

  if (state.cart.status === OrderStatus.NEW) {
    return {
      ...state,
      error: null,
      cart: newCart,
    }
  }


  if (state.cart.restaurant.id === restaurant.id) {
    console.log("id", state.cart.restaurant.id, restaurant.id)
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


export const handleAddOrder = (
  state: CartState,
  {product, quantity}: { product: ProductModel, quantity: number }
): CartState => {

  let cartUpdated: Cart | undefined;
  if (state.cart) {
    cartUpdated = state.cart.addItem(product, quantity);
  }


  return cartUpdated !== undefined ? {...state, cart: cartUpdated} : {...state};

};


export const handleRemoveItem = (state: CartState, {item}: { item: ItemModel }): CartState => {

  let cartUpdated: Cart | undefined;
  if (state.cart) {
    cartUpdated = state.cart.removeItem(item.product);
  }


  return cartUpdated !== undefined ? {...state, cart: cartUpdated} : {...state};

};
