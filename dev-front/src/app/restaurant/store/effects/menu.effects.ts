import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {catchError, map, mergeMap, Observable, of, withLatestFrom} from "rxjs";
import {MenuService} from "@services/menu.service";
import {MenuActions} from "@root/restaurant/store/actions/menu.actions";
import {selectRestaurantSelectedId} from "@root/restaurant/store/selectors/menus.selector";

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
      mergeMap(([actions, selectedRestaurantId]): Observable<any> => {
        if (selectedRestaurantId !== null) {
          return this.menuService.getMenus(selectedRestaurantId).pipe(
            map(data => {
              const {topSelling, discounts, others} = data;
              return MenuActions.loadMenuSuccess({topSelling, discounts, others});
            }),
            catchError(error => of(MenuActions.loadMenuError({error})))
          );
        } else {
          return of(MenuActions.loadMenuError({error: this.messageNotSelected}));
        }
      })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store,
    private menuService: MenuService,
  ) {
  }


}
