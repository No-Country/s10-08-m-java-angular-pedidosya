import {Cart} from "@models/cart.model";
import {OrderStatus} from "@models/AllTypes.enum";
import {AddressModel, INITIAL_STATE_ADDRESS} from "@models/address.model";


export interface OrderState {
  cart: Cart | null;
  status: OrderStatus;
  address: AddressModel;
  //payment: PaymentModel;
  isLoading: boolean;
  error: string | null;
}

export const INITIAL_STATE: OrderState = {
  cart: null,
  address: INITIAL_STATE_ADDRESS,
  isLoading: false,
  status: OrderStatus.NEW,
  error: null
}
