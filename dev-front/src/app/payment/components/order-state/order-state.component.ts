import { Component } from '@angular/core';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { TrackOrderComponent } from '../track-order/track-order.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.scss'],
  imports: [
    OrderSummaryComponent,
    TrackOrderComponent,
    MatIconModule,
  ],
  standalone: true
})
export class OrderStateComponent {
  constructor(private router: Router) { }
  
  goTo(path: string) {
    this.router.navigate(['payment/' + path])
  }
}
