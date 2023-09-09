import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CounterComponent} from "@shared/components/counter/counter.component";
import {MatButtonModule} from "@angular/material/button";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ProductModel} from "@models/product.model";

@Component({
  selector: 'app-order-footer',
  templateUrl: './order-footer.component.html',
  styleUrls: ['./order-footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    MatButtonModule,
    AsyncPipe,

  ]
})
export class OrderFooterComponent implements OnInit {
  @Output() quantityChange = new EventEmitter<number>()
  @Output() addToCart = new EventEmitter<void>()
  @Input() product!: ProductModel
  isProductInCart: boolean = false
  sameQuantityProductInCart: boolean
  quantity: number
  quantityCart: number
  cartSubtotal: number


  constructor(private _cartFacade: CartFacade) {
    this.quantity = 0
    this.quantityCart = 0
    this.cartSubtotal = 0
    this.sameQuantityProductInCart = true
  }


  onCountChange(count: number) {
    this.sameQuantityProductInCart = this.quantityCart === count
    this.quantity = count
    this.quantityChange.emit(count);
  }


  getSubtotal(): number {
    return this.quantity * this.product.price + this.cartSubtotal
  }

  onAddToCart() {
    this.addToCart.emit();
  }

  ngOnInit() {
    this._cartFacade.getQuantitySelected(this.product).subscribe((quantity: number) => {
      this.quantityCart = quantity
      this.quantity = quantity
    })

    this._cartFacade.getTotalProductPrice().subscribe(value => {

      this.cartSubtotal = value - this.quantity * this.product.price
    })

    this._cartFacade.isProductInCart(this.product).subscribe((isInCart) => (this.isProductInCart = isInCart))


  }


}
