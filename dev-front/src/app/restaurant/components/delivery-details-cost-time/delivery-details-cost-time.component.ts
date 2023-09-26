import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-delivery-details-cost-time',
  templateUrl: './delivery-details-cost-time.component.html',
  styleUrls: ['./delivery-details-cost-time.component.scss'],
  standalone: true,
  imports: [
    MatIconModule
  ]
})
export class DeliveryDetailsCostTimeComponent {
  @Input() minTime: number = 0
  @Input() maxTime: number = 0
  @Input() cost: number = 0

}
