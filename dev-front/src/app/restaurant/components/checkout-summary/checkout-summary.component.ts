import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe
  ]
})
export class CheckoutSummaryComponent {
  totalProducts$: Observable<number>
  deliveryCost$: Observable<number>


  constructor(private _cartFacade: CartFacade) {
    this.totalProducts$ = _cartFacade.getTotalProductPrice()
    this.deliveryCost$ = _cartFacade.getDeliveryCost()
  }

}
