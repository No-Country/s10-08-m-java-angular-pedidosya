import {createActionGroup, props} from "@ngrx/store";
import {Restaurant} from "@models/restaurant.model";
import {ItemModel} from "@models/item.model";


export const OrderActions = createActionGroup({
  source: 'Order',
  events: {
    'New cart': props<{ restaurant: Restaurant }>(),
    'Add item': props<{ item: ItemModel }>(),
    'Delete item': props<{ item: ItemModel }>(),
  },
});
