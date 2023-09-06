import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Menu} from "@models/menu.model";


export const MenuActions = createActionGroup({
  source: 'Menus',
  events: {
    'Set Resturant Selected': props<{ restaurantSelectedId: number | null }>(),
    'Load Menus': emptyProps(),
    'Load Menu Error': props<{ error: string }>(),
    'Load Menu Success': props<{ discounts: Menu | null, topSelling: Menu | null, others: Menu[] | null }>(),
    'Update Search Term': props<{ searchTerm: string }>(),
    'Set Product Selected Id': props<{ productSelectedId: number | null }>(),
  },
});
