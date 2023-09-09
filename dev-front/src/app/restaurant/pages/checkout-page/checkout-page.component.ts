import {Component, OnInit} from '@angular/core';
import {ButtonNavBackComponent} from "@shared/components/button-nav-back/button-nav-back.component";

import {CheckoutFooterComponent} from "@root/restaurant/layout/checkout-footer/checkout-footer.component";
import {take} from "rxjs";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {Router} from "@angular/router";
import {
  CheckoutProductListComponent
} from "@root/restaurant/components/checkout-product-list/checkout-product-list.component";
import {CheckoutSummaryComponent} from "@root/restaurant/components/checkout-summary/checkout-summary.component";
import {ProductListComponent} from "@root/restaurant/components/product-list/product-list.component";
import {ProductModel} from "@models/product.model";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";


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
    ProductListComponent
  ]
})
export class CheckoutPageComponent implements OnInit {
  title: string = '¿Queres agregar algo más?'
  products: ProductModel[]


  constructor(private _router: Router, private _cartFacade: CartFacade, private _menuFacade: MenuFacade) {
    this.products = []
  }


  ngOnInit(): void {
    this._cartFacade.cart$.pipe(take(1)).subscribe((cart) => {
      if (cart === null) {
        this._router.navigate(['/restaurant'])
      }
    })

  }

}
