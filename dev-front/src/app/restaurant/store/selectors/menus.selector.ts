import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MenuState} from "@root/restaurant/store/menu.state";

export const selectMenuState = createFeatureSelector<MenuState>('menus');


export const selectRestaurantSelectedId = createSelector(
  selectMenuState,
  (state: MenuState) => state.restaurantSelectedId
);


export const selectTopSelling = createSelector(
  selectMenuState,
  (state: MenuState) => state.topSelling
);

export const selectDiscounts = createSelector(
  selectMenuState,
  (state: MenuState) => state.discounts
);

export const selectOthers = createSelector(
  selectMenuState,
  (state: MenuState) => state.others
);

export const selectLoading = createSelector(
  selectMenuState,
  (state: MenuState) => state.isLoading
);

export const selectError = createSelector(
  selectMenuState,
  (state: MenuState) => state.error
);
export const selectSearchTerm = createSelector(
  selectMenuState,
  (state: MenuState) => state.searchTerm
);
