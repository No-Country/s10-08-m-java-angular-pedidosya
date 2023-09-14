import {Component, OnInit} from '@angular/core';
import {ButtonNavBackComponent} from "@shared/components/button-nav-back/button-nav-back.component";

import {CheckoutFooterComponent} from "@root/restaurant/layout/checkout-footer/checkout-footer.component";
import {Observable, take} from "rxjs";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {Router} from "@angular/router";
import {
  CheckoutProductListComponent
} from "@root/restaurant/components/checkout-product-list/checkout-product-list.component";
import {CheckoutSummaryComponent} from "@root/restaurant/components/checkout-summary/checkout-summary.component";
import {ProductListComponent} from "@root/restaurant/components/product-list/product-list.component";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {Menu} from "@models/menu.model";
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-checkout-pages',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  standalone: true,
  imports: [
    ButtonNavBackComponent,
    CheckoutFooterComponent,
    CheckoutProductListComponent,
    CheckoutSummaryComponent,
    ProductListComponent,
    AsyncPipe
  ]
})
export class CheckoutPageComponent implements OnInit {
  title: string = '¿Queres agregar algo más?'
  products$: Observable<Menu | null>


  constructor(private _router: Router, private _cartFacade: CartFacade, private _menuFacade: MenuFacade) {
    this.products$ = _menuFacade.topSelling$
  }


  ngOnInit(): void {
    this._cartFacade.cart$.pipe(take(1)).subscribe((cart) => {
      if (cart === null) {
        this._router.navigate(['/restaurant'])
      } else {
        this._menuFacade.restaurantSelected(cart.restaurant.id)
        this._cartFacade.clearErrorMsg()
      }

    })

  }

}
