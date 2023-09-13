import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payment-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,

  ],
  templateUrl: './payment-footer.component.html',
  styleUrls: ['./payment-footer.component.scss']
})
export class PaymentFooterComponent {


  confirmOrder() {
    return;
  }


}
