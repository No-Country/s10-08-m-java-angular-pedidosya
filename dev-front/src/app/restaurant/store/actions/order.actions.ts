import {createActionGroup, props} from "@ngrx/store";
import {Restaurant} from "@models/restaurant.model";
import {ItemModel} from "@models/item.model";
import {OrderStatus} from "@models/AllTypes.enum";


export const OrderActions = createActionGroup({
  source: 'Order',
  events: {
    'New cart': props<{ restaurant: Restaurant }>(),
    'Add item': props<{ item: ItemModel }>(),
    'Delete item': props<{ item: ItemModel }>(),
    'Set Order Status': props<{ status: OrderStatus }>(),
  },
});
