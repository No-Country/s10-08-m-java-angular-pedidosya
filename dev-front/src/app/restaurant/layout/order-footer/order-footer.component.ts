import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CounterComponent} from "@shared/components/counter/counter.component";
import {MatButtonModule} from "@angular/material/button";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-order-footer',
  templateUrl: './order-footer.component.html',
  styleUrls: ['./order-footer.component.scss'],
  standalone: true,
  imports: [
    CounterComponent,
    MatButtonModule,
    AsyncPipe,

  ]
})
export class OrderFooterComponent {
  @Output() quantityChange = new EventEmitter<number>()
  @Output() addToCart = new EventEmitter<void>()
  @Input() unitPrice: number = 0
  quantity: number = 0
  cartSubtotal: number = 0

  constructor(private _cartFacade: CartFacade) {
    _cartFacade.getSubtotal().subscribe(value => {
      this.cartSubtotal = value
    })
  }


  onCountChange(count: number) {
    this.quantity = count
    this.quantityChange.emit(count);
  }

  getSubtotal(): number {
    return (this.quantity * this.unitPrice) + this.cartSubtotal
  }

  onAddToCart() {
    this.addToCart.emit();
  }

}
