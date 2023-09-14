import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {catchError, concatMap, exhaustMap, map, of, switchMap, withLatestFrom} from "rxjs";
import {MenuService} from "@services/menu.service";
import {MenuActions} from "@root/restaurant/store/actions/menu.actions";
import {selectRestaurantSelectedId} from "@root/restaurant/store/selectors/menus.selector";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";
import {OrderService} from "@services/order.service";
import {OrderActions} from "@root/restaurant/store/actions/order.actions";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {OrderModel} from "@models/order.model";

@Injectable({
  providedIn: "root"
})
export class CartEffects {
  // noinspection TypeScriptValidateTypes
  sendOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.sendOrder),
      switchMap(action => {
        return this._cartFacade.createOrder().pipe(
          switchMap(order => {
            if (order !== null && typeof order !== 'undefined') {
              return this.orderService.sendOrder(order).pipe(
                map(_ => OrderActions.sendOrderSuccess()),
                catchError(error => of(OrderActions.sendOrderError({ error })))
              );
            } else {
              return of(OrderActions.sendOrderError({ error: 'Order is null or undefined' }));
            }
          })
        );
      })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store,
    private orderService: OrderService,
    private _cartFacade: CartFacade,
  ) {
  }


}
