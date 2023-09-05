import {createReducer, on} from "@ngrx/store";
import {MenuActions} from "@root/restaurant/store/actions/menu.actions";
import {INITIAL_STATE} from "@root/restaurant/store/menu.state";
import {
  handleLoadMenus,
  handleLoadMenusFailure,
  handleLoadMenusSuccess, handleSetSelectedRestaurant, handleUpdateSearchTerm
} from "@root/restaurant/store/reducers/handler/menu.handlers";


export const menuReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(MenuActions.setResturantSelected, handleSetSelectedRestaurant),
  on(MenuActions.loadMenus, handleLoadMenus),
  on(MenuActions.loadMenuSuccess, handleLoadMenusSuccess),
  on(MenuActions.loadMenuError, handleLoadMenusFailure),
  on(MenuActions.updateSearchTerm, handleUpdateSearchTerm),
);
