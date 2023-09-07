import {ProductModel} from "@models/product.model";
import {CartState} from "@root/restaurant/store/cart.state";
import {Restaurant} from "@models/restaurant.model";
import {Cart} from "@models/cart.model";
import {OrderStatus} from "@models/AllTypes.enum";


export const handleNewCart = (state: CartState, {restaurant}: { restaurant: Restaurant }): CartState => {
  let newCart = new Cart(restaurant, [], OrderStatus.NEW)


  return {
    ...state,
    cart: newCart,
  }
}


export const handleAddOrder = (
  state: CartState,
  {product, quantity}: { product: ProductModel, quantity: number }
): CartState => {

  let cartUpdated: Cart | undefined;
  if (state.cart) {
    cartUpdated = state.cart.addProduct(product, quantity);
  }


  return cartUpdated !== undefined ? {...state, cart: cartUpdated} : {...state};

};
