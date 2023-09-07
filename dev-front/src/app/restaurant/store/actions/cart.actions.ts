import {createActionGroup, props} from "@ngrx/store";
import {ProductModel} from "@models/product.model";
import {Restaurant} from "@models/restaurant.model";


export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'New cart': props<{ restaurant: Restaurant }>(),
    'Add order': props<{ product: ProductModel, quantity: number }>(),
    'Update order': props<{ product: ProductModel, quantity: number }>(),
    'Delete order': props<{ product: ProductModel }>(),
  },
});
