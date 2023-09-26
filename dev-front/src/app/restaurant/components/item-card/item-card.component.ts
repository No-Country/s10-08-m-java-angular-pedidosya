import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CounterComponent} from "@shared/components/counter/counter.component";
import {ItemModel} from "@models/item.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    CounterComponent,
    RouterLink
  ]
})
export class ItemCardComponent implements OnInit {
  @Input() item!: ItemModel;
  @Output() changeQuantity = new EventEmitter<ItemModel>()
  @Output() deleteItem = new EventEmitter<ItemModel>()
  @Output() editItem = new EventEmitter<ItemModel>()

  initialQuantity: number

  constructor() {
    this.initialQuantity = this.item?.quantity || 0
  }


  emitChangeQuantity(quantity: number) {
    const itemUpdated: ItemModel = {
      product: this.item.product,
      unitPrice: this.item.unitPrice,
      quantity: quantity
    };
    this.initialQuantity = quantity

    this.changeQuantity.emit(itemUpdated);
  }

  emitDeleteItem() {
    this.deleteItem.emit(this.item);
  }


  emitUpdateItem() {
    this.editItem.emit(this.item);
  }

  ngOnInit(): void {
    this.initialQuantity = this.item?.quantity || 0
  }

}
