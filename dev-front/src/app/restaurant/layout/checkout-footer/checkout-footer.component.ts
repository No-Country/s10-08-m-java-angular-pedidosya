import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-checkout-footer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './checkout-footer.component.html',
  styleUrls: ['./checkout-footer.component.scss']
})
export class CheckoutFooterComponent {
  totalPrice$: Observable<number>


  constructor(private _cartFacade: CartFacade, private _router: Router) {
    this.totalPrice$ = _cartFacade.getTotal()
  }

  redirectToPayment() {
    this._router.navigate(['payment'])
  }
}
