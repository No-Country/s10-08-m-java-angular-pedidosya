import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Menu} from "@models/menu.model";


export const MenuActions = createActionGroup({
  source: 'Menus',
  events: {
    'Set Resturant Selected': props<{ restaurantSelectedId: number | null }>(),
    //Load Menus
    'Load Menus': emptyProps(),
    'Load All Menu Error': props<{ error: string }>(),
    'Load All Menu Success': props<{ others: Menu[] | null }>(),
    //Load tops
    'Load Top Menus': emptyProps(),
    'Load Top Menu Error': props<{ error: string }>(),
    'Load Top Menu Success': props<{ topSelling: Menu | null }>(),
    //Load Discounts
    'Load Discounts Menus': emptyProps(),
    'Load Discounts Menu Error': props<{ error: string }>(),
    'Load Discounts Success': props<{ discounts: Menu | null }>(),
    //
    'Update Search Term': props<{ searchTerm: string }>(),
    'Set Product Selected Id': props<{ productSelectedId: number | null }>(),
  },
});
