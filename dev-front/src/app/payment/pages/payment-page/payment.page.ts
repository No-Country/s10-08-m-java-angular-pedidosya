import {Component} from '@angular/core';
import {PaymentHeaderComponent} from "@root/payment/layout/payment-header/payment-header.component";
import {RouterOutlet} from "@angular/router";
import {PaymentFooterComponent} from "@root/payment/layout/payment-footer/payment-footer.component";

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [
    PaymentHeaderComponent,
    RouterOutlet,
    PaymentFooterComponent
  ],
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss']
})
export class PaymentPage {

}
