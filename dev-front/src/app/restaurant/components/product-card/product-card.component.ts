import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {ProductModel} from "@models/product.model";
import {ButtonFavoriteComponent} from "@shared/components/button-favorite/button-favorite.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, ButtonFavoriteComponent, MatButtonModule, MatIconModule],
})
export class ProductCardComponent {
  @Input() product!: ProductModel
  @Input() quantity!: number
  @Input() discount: number = 0;

  constructor(private _menuFacade: MenuFacade) {
  }


  setSelectedFavorite(event: Event) {
    event.stopPropagation();
    this._menuFacade.toogleFavorite(this.product)
  }


}
