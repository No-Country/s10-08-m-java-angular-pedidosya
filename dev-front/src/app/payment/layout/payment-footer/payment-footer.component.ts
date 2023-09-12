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
  pageTitle: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pageTitle = this.route.snapshot.firstChild?.url[0].path ?? ''

  }

  renderConfirm() {
    return this.pageTitle === 'confirm'
  }


  confirmOrder() {
    return;
  }

  saveOptions() {
    return;
  }


}
