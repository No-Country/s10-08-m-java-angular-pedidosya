import {Cart} from "@models/cart.model";
import {OrderStatus} from "@models/AllTypes.enum";

export interface OrderState {
  cart: Cart | null;
  status: OrderStatus;
  //address: AddressModel;
  //payment: PaymentModel;
  isLoading: boolean;
  error: string | null;
}

export const INITIAL_STATE: OrderState = {
  cart: null,
  isLoading: false,
  status: OrderStatus.NEW,
  error: null
}
