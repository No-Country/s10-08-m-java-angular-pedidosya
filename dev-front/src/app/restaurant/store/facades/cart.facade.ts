import {Injectable} from "@angular/core";
import {combineLatest, map, Observable, take} from "rxjs";
import {Store} from "@ngrx/store";
import {Cart} from "@models/cart.model";
import {
  selectAddress,
  selectCart,
  selectError,
  selectLoading,
  selectOrderStatus
} from "@root/restaurant/store/selectors/cart.selector";
import {ProductModel} from "@models/product.model";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {Restaurant} from "@models/restaurant.model";
import {ItemModel} from "@models/item.model";
import {OrderActions} from "@root/restaurant/store/actions/order.actions";
import {OrderStatus, OrderStatusNumeric} from "@models/AllTypes.enum";
import {OrderModel} from "@models/order.model";
import {AddressModel} from "@models/address.model";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  cart$: Observable<Cart | null>;
  status$: Observable<OrderStatus | null>;
  address$: Observable<AddressModel | null>;
  isLoading$: Observable<boolean>
  errorMessage$: Observable<string | null>;


  constructor(private _store: Store, private _menuFacade: MenuFacade) {
    this.cart$ = _store.select(selectCart)
    this.status$ = _store.select(selectOrderStatus)
    this.address$ = _store.select(selectAddress)
    this.isLoading$ = _store.select(selectLoading)
    this.errorMessage$ = _store.select(selectError)
  }

  initCart(restaurant: Restaurant,) {
    this._store.dispatch(OrderActions.newCart({restaurant: restaurant}));
  }

  setOrderStatus(orderStatus: OrderStatus) {
    this._store.dispatch(OrderActions.setOrderStatus({status: orderStatus}))
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

  getServiceCost(): Observable<number> {
    return this.cart$.pipe(
      map((cart) => (cart ? cart.getServicePrice() : 0))
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

  createOrder() {
    combineLatest([
      this.cart$,
      this.address$,
      this.getTotal(),
      this.status$
    ]).pipe(
      take(1) // Toma un solo valor y completa el observable.
    ).subscribe(([cart, address, total, status]) => {
      const orderStatusValue: number = status ? OrderStatusNumeric[status] : -1;
      if (cart !== null && address !== null) {
        const order: OrderModel = {
          orderId: 0,
          items: cart.items,
          total: total,
          status: orderStatusValue,
          address: address,
          restaurant: cart.restaurant
        };
        console.log(order);
      }
    });
  }


  sendOrder() {
    //TODO:YA!
  }


}
