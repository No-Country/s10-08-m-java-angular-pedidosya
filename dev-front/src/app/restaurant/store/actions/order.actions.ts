import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Restaurant} from "@models/restaurant.model";
import {ItemModel} from "@models/item.model";
import {OrderStatus} from "@models/AllTypes.enum";
import {OrderModel} from "@models/order.model";


export const OrderActions = createActionGroup({
  source: 'Order',
  events: {
    'New cart': props<{ restaurant: Restaurant }>(),
    'Reset cart': emptyProps(),
    'Add item': props<{ item: ItemModel }>(),
    'Delete item': props<{ item: ItemModel }>(),
    'Set Order Status': props<{ status: OrderStatus }>(),
    'Send Order ': emptyProps(),
    'Send Order Success': emptyProps(),
    'Send Order Error': props<{ error: string }>(),
    'Clear Error Msg': emptyProps(),
  },
});
