import {Component} from '@angular/core';
import {PaymentHeaderComponent} from "@root/payment/layout/payment-header/payment-header.component";
import {RouterOutlet} from "@angular/router";
import {PaymentFooterComponent} from "@root/payment/layout/payment-footer/payment-footer.component";
import {ModalConfirmComponent} from "@root/payment/components/modal-confirm/modal-confirm.component";

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [
    PaymentHeaderComponent,
    RouterOutlet,
    PaymentFooterComponent,
    ModalConfirmComponent
  ],
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss']
})
export class PaymentPage {


}
