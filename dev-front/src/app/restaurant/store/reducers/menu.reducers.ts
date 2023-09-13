import {createReducer, on} from "@ngrx/store";
import {MenuActions} from "@root/restaurant/store/actions/menu.actions";
import {INITIAL_STATE} from "@root/restaurant/store/menu.state";
import {
  handleLoadDiscountsSuccess,
  handleLoadMenus,
  handleLoadMenusFailure,
  handleLoadMenusSuccess,
  handleLoadTopMenuSuccess,
  handleSetProductSelectedId,
  handleSetSelectedRestaurant,
  handleUpdateSearchTerm
} from "@root/restaurant/store/reducers/handler/menu.handlers";


export const menuReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(MenuActions.setResturantSelected, handleSetSelectedRestaurant),
  //load menus
  on(MenuActions.loadMenus, handleLoadMenus),
  on(MenuActions.loadAllMenuSuccess, handleLoadMenusSuccess),
  on(MenuActions.loadAllMenuError, handleLoadMenusFailure),
  //load top
  on(MenuActions.loadTopMenus, handleLoadMenus),
  on(MenuActions.loadTopMenuSuccess, handleLoadTopMenuSuccess),
  on(MenuActions.loadTopMenuError, handleLoadMenusFailure),
//load discount
  on(MenuActions.loadDiscountsMenus, handleLoadMenus),
  on(MenuActions.loadDiscountsSuccess, handleLoadDiscountsSuccess),
  on(MenuActions.loadDiscountsMenuError, handleLoadMenusFailure),
  //load menus
  on(MenuActions.updateSearchTerm, handleUpdateSearchTerm),
  on(MenuActions.setProductSelectedId, handleSetProductSelectedId),
);
