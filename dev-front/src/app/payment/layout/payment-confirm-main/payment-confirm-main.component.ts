import {Component} from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {OrderSummaryComponent} from "@root/payment/components/order-summary/order-summary.component";
import {Router} from "@angular/router";
import {PaymentFooterComponent} from "@root/payment/layout/payment-footer/payment-footer.component";

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
    PaymentFooterComponent
  ]
})
export class PaymentConfirmMainComponent {
  propine = ''

  constructor(private _router: Router) {
  }

  goTo(path: string) {
    this._router.navigate(['payment/' + path])
  }
}
