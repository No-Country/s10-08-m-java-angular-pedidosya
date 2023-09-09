import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-restaurant-details-footer',
  templateUrl: './restaurant-details-footer.component.html',
  styleUrls: ['./restaurant-details-footer.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    AsyncPipe
  ]
})
export class RestaurantDetailsFooterComponent {

  @Input() subtotal!: number

}
