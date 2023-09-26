import {Component} from '@angular/core';
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  imports: [
    AsyncPipe
  ],
  standalone: true
})
export class OrderSummaryComponent {
  totalProducts$: Observable<number>
  deliveryCost$: Observable<number>
  serviceCost$: Observable<number>
  total$: Observable<number>


  constructor(private _cartFacade: CartFacade) {
    this.totalProducts$ = _cartFacade.getTotalProductPrice()
    this.deliveryCost$ = _cartFacade.getDeliveryCost()
    this.serviceCost$ = _cartFacade.getServiceCost()
    this.total$ = _cartFacade.getTotal()
  }


}
