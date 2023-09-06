import {Injectable} from "@angular/core";
import {map, Observable, take} from "rxjs";
import {Store} from "@ngrx/store";
import {selectError, selectLoading} from "@root/restaurant/store/selectors/menus.selector";
import {Cart} from "@models/cart.model";
import {selectCart} from "@root/restaurant/store/selectors/cart.selector";
import {CartActions} from "@root/restaurant/store/actions/cart.actions";
import {ProductModel} from "@models/product.model";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {Restaurant} from "@models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  cart$: Observable<Cart | null>;
  isLoading$: Observable<boolean>
  errorMessage$: Observable<string | null>;


  constructor(private _store: Store, private _menuFacade: MenuFacade) {
    this.cart$ = _store.select(selectCart)
    this.isLoading$ = _store.select(selectLoading)
    this.errorMessage$ = _store.select(selectError)
  }

  addToCart(restaurant: Restaurant, product: ProductModel, quantity: number) {

    this.cart$.pipe(take(1)).subscribe((cart) => {
      if (cart === null) {
        this._store.dispatch(CartActions.newCart({restaurant: restaurant}));
      }
      this._store.dispatch(CartActions.addOrder({product: product, quantity: quantity}));

    });
  }


  getSubtotal(): Observable<any> {
    return this.cart$.pipe(
      map((cart) => (cart ? cart.getTotalProductPrice() : 0))
    );
  }


}
