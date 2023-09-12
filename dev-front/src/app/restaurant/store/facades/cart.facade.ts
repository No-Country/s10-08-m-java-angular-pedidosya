import {Injectable} from "@angular/core";
import {map, Observable, take} from "rxjs";
import {Store} from "@ngrx/store";
import {Cart} from "@models/cart.model";
import {selectCart, selectError, selectLoading} from "@root/restaurant/store/selectors/cart.selector";
import {OrderActions} from "@root/restaurant/store/actions/orderActions";
import {ProductModel} from "@models/product.model";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {Restaurant} from "@models/restaurant.model";
import {ItemModel} from "@models/item.model";

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

  initCart(restaurant: Restaurant,) {
    this._store.dispatch(OrderActions.newCart({restaurant: restaurant}));
  }



  addItemToCart(newItem: ItemModel) {
    this._store.dispatch(OrderActions.addItem({item: newItem}));
  }

  updateItem(itemUpdated: ItemModel) {
    this._store.dispatch(OrderActions.addItem({item: itemUpdated}));
  }

  deleteItem(item: ItemModel) {
    this._store.dispatch(OrderActions.deleteItem({item: item}));
  }

  getQuantitySelected(product: ProductModel): Observable<number> {
    return this.cart$.pipe(
      take(1),
      map((cart: Cart | null) => {
        if (cart !== null) {
          return cart.getQuantityBy(product);
        }
        return 0;
      })
    );
  }


  getTotalProductPrice(): Observable<number> {
    return this.cart$.pipe(
      map((cart) => (cart ? cart.getTotalProductPrice() : 0))
    );
  }

  getTotal(): Observable<number> {
    return this.cart$.pipe(
      map((cart) => (cart ? cart.getTotal() : 0))
    );
  }

  getDeliveryCost(): Observable<number> {
    return this.cart$.pipe(
      map((cart) => (cart ? cart.getDeliveryCost() : 0))
    );
  }

  isProductInCart(product: ProductModel): Observable<boolean> {
    return this.cart$.pipe(
      map((cart) => {
        if (cart !== null) {
          return cart.isProductInCart(product);
        } else {
          return false;
        }
      })
    );
  }


}
