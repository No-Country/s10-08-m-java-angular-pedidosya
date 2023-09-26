import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {Cart} from "@models/cart.model";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {ItemCardComponent} from "@root/restaurant/components/item-card/item-card.component";
import {ItemModel} from "@models/item.model";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {Router, RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-checkout-products-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, RouterLink, MatButtonModule],
  templateUrl: './checkout-product-list.component.html',
  styleUrls: ['./checkout-product-list.component.scss']
})
export class CheckoutProductListComponent {
  cart$: Observable<Cart | null>

  constructor(private _cartFacade: CartFacade, private _menuFacade: MenuFacade, private _router: Router) {
    this.cart$ = _cartFacade.cart$

  }

  onChangesQuantityItem(item: ItemModel) {
    this._cartFacade.updateItem(item)
  }

  onDeleteItem(item: ItemModel) {
    this._cartFacade.deleteItem(item)
  }

  editItem(item: ItemModel) {
    this._menuFacade.setProductId(item.product.id)
    this._router.navigate(['/restaurant/products'])
  }


}
