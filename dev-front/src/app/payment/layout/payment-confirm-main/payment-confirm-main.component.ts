import {Component} from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {OrderSummaryComponent} from "@root/payment/components/order-summary/order-summary.component";

@Component({
  selector: 'app-payment-confirm-main',
  templateUrl: './payment-confirm-main.component.html',
  styleUrls: ['./payment-confirm-main.component.scss'],
  standalone: true,
  imports: [
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    OrderSummaryComponent
  ]
})
export class PaymentConfirmMainComponent {
  propine = ''
}
