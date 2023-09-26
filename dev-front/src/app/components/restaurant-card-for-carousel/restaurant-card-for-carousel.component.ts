import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card-for-carousel',
  templateUrl: './restaurant-card-for-carousel.component.html',
  styleUrls: ['./restaurant-card-for-carousel.component.scss']
})
export class RestaurantCardForCarouselComponent {
  @Input() name: string = '';
  @Input() logo: string = '';
  @Input() image: string = '';
  @Input() price: string = '';
  @Input() rate: string = '';
  @Input() deliveryTime: string = '';
}
