import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CounterComponent} from "@shared/components/counter/counter.component";
import {ItemModel} from "@models/item.model";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    CounterComponent
  ]
})
export class ItemCardComponent {
  @Input() item!: ItemModel;
  @Output() changeQuantity = new EventEmitter<ItemModel>()
  @Output() deleteItem = new EventEmitter<ItemModel>()
  @Output() editItem = new EventEmitter<ItemModel>()

  emitChangeQuantity(quantity: number) {
    let itemUpdated: ItemModel = {quantity: quantity, product: this.item.product, unitPrice: this.item.unitPrice}
    this.item = itemUpdated;
    this.changeQuantity.emit(itemUpdated);
  }

  emitDeleteItem() {
    this.deleteItem.emit(this.item);
  }


  emitUpdateItem() {
    this.editItem.emit(this.item);
  }

}
