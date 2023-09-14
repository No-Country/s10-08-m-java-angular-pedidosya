import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {ModalConfirmComponent} from "@root/payment/components/modal-confirm/modal-confirm.component";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";

@Component({
  selector: 'app-payment-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ModalConfirmComponent,

  ],
  templateUrl: './payment-footer.component.html',
  styleUrls: ['./payment-footer.component.scss']
})
export class PaymentFooterComponent {
  @Input() total!: number;
  showModal = false

  constructor(private _router: Router, private _cartFacade: CartFacade) {
  }


  confirmOrder() {
    this._cartFacade.sendOrder();
  }

  goTo(path: string) {
    this.showModal = true;
    setTimeout(() => {
      this._router.navigate(['payment/' + path])
    }, 2500);

  }

}
