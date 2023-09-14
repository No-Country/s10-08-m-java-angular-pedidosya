import {Component, OnInit} from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {OrderSummaryComponent} from "@root/payment/components/order-summary/order-summary.component";
import {Router} from "@angular/router";
import {PaymentFooterComponent} from "@root/payment/layout/payment-footer/payment-footer.component";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {AsyncPipe} from "@angular/common";
import {ModalConfirmComponent} from "@root/payment/components/modal-confirm/modal-confirm.component";

@Component({
  selector: 'app-payment-confirm-main',
  templateUrl: './payment-confirm-main.component.html',
  styleUrls: ['./payment-confirm-main.component.scss'],
  standalone: true,
  imports: [
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    OrderSummaryComponent,
    PaymentFooterComponent,
    AsyncPipe,
    ModalConfirmComponent
  ]
})
export class PaymentConfirmMainComponent implements OnInit {

  propine = ''
  total = 0;


  constructor(private _router: Router, private _cartFacade: CartFacade) {
  }

  goTo(path: string) {
    this._router.navigate(['payment/' + path])
  }


  ngOnInit(): void {
    this._cartFacade.getTotal().subscribe((value) => {
      this.total = value
      console.log(value + this.propine)
    })
  }
}
