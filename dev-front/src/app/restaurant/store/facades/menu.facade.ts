import {Injectable} from "@angular/core";
import {Menu} from "@models/menu.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {
  selectDiscounts,
  selectError,
  selectLoading,
  selectOthers,
  selectProductSelected,
  selectRestaurantSelectedId,
  selectSearchTerm,
  selectTopSelling
} from "@root/restaurant/store/selectors/menus.selector";
import {Restaurant} from "@models/restaurant.model";
import {MenuActions} from "@root/restaurant/store/actions/menu.actions";
import {RestaurantFacade} from "@root/restaurant/store/facades/restaurant.facade";
import {ProductModel} from "@models/product.model";

@Injectable({
  providedIn: 'root'
})
export class MenuFacade {
  selectedRestaurant$: Observable<Restaurant | null>;
  topSelling$: Observable<Menu | null>;
  discounts$: Observable<Menu | null>;
  others$: Observable<Menu[] | null>;
  isLoading$: Observable<boolean>
  errorMessage$: Observable<string | null>;
  searchTerm$: Observable<string>;
  selectedProduct$: Observable<ProductModel | null>


  constructor(private _store: Store, private _restaurantFacade: RestaurantFacade) {
    let id$ = _store.select(selectRestaurantSelectedId)
    this.selectedRestaurant$ = _restaurantFacade.getRestaurantById(id$)
    this.topSelling$ = _store.select(selectTopSelling)
    this.discounts$ = _store.select(selectDiscounts)
    this.others$ = _store.select(selectOthers)
    this.isLoading$ = _store.select(selectLoading)
    this.errorMessage$ = _store.select(selectError)
    this.searchTerm$ = _store.select(selectSearchTerm)
    this.selectedProduct$ = _store.select(selectProductSelected)

  }

  loadMenus(): void {
    this._store.dispatch(MenuActions.loadMenus());
  }

  restaurantSelected(id: number): void {
    this._store.dispatch(MenuActions.setResturantSelected({restaurantSelectedId: id}));
  }

  updateSearchTerm(term: string): void {
    this._store.dispatch(MenuActions.updateSearchTerm({searchTerm: term}));
  }

  setProductId(id: number): void {
    this._store.dispatch(MenuActions.setProductSelectedId({productSelectedId: id}));
  }


}
