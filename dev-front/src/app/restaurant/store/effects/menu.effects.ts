import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {catchError, concatMap, exhaustMap, map, of, withLatestFrom} from "rxjs";
import {MenuService} from "@services/menu.service";
import {MenuActions} from "@root/restaurant/store/actions/menu.actions";
import {selectRestaurantSelectedId} from "@root/restaurant/store/selectors/menus.selector";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";

@Injectable({
  providedIn: "root"
})
export class MenuEffects {

  messageNotSelected: string = "No ha seleccionado un restaurante"

  // noinspection TypeScriptValidateTypes
  loadMenus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenuActions.loadMenus),
      withLatestFrom(this.store.select(selectRestaurantSelectedId)),
      concatMap(([actions, selectedRestaurantId]) => {
        if (selectedRestaurantId !== null) {
          return this.menuService.getMenus(selectedRestaurantId).pipe(
            map(data => {
              const {others} = data;
              this.store.dispatch(MenuActions.loadAllMenuSuccess({others}))
              return MenuActions.loadDiscountsMenus();
            }),
            catchError(error => of(MenuActions.loadAllMenuError({error})))
          );
        } else {
          return of(MenuActions.loadAllMenuError({error: this.messageNotSelected}));
        }
      }),
    )
  );

  // noinspection TypeScriptValidateTypes
  loadDiscountsMenus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenuActions.loadDiscountsMenus),
      withLatestFrom(this.store.select(selectRestaurantSelectedId)),
      concatMap(([actions, selectedRestaurantId]) => {
        return this.menuService.getDiscounts(selectedRestaurantId).pipe(
          map(data => {
            const {discounts} = data;
            this.store.dispatch(MenuActions.loadDiscountsSuccess({discounts}))
            return MenuActions.loadTopMenus();
          }),
          catchError(error => of(MenuActions.loadDiscountsMenuError({error})))
        );
      })
    )
  );


  // noinspection TypeScriptValidateTypes
  loadTopMenus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenuActions.loadTopMenus),
      withLatestFrom(this.store.select(selectRestaurantSelectedId)),
      concatMap(([actions, selectedRestaurantId]) => {
        return this.menuService.getTopSelling(selectedRestaurantId).pipe(
          map(data => {
            const {topSelling} = data;
            return MenuActions.loadTopMenuSuccess({topSelling});
          }),
          catchError(error => of(MenuActions.loadTopMenuError({error})))
        );
      })
    )
  );
  // noinspection TypeScriptValidateTypes
  selectFavoriteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenuActions.loadSelectFavoriteProduct),
      exhaustMap(({product, isFavorite}) => this.menuService.setFavoriteProduct(product.id, isFavorite)
        .pipe(
          map((_) => (MenuActions.selectFavoriteProductSuccess())),
          catchError(error => of(RestaurantsActions.selectFavoriteRestaurantError({error: error})))
        ))
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store,
    private menuService: MenuService,
  ) {
  }


}
