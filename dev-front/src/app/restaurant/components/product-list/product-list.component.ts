import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ProductModel} from "@models/product.model";
import {ProductCardComponent} from "@root/restaurant/components/product-card/product-card.component";
import {SharedModule} from "@shared/shared.module";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [ProductCardComponent, NgIf, NgForOf, SharedModule]
})
export class ProductListComponent {
  @Input() products: ProductModel[] | null = null;
  @Input() isScrolling: boolean = true;
  @Input() title!: string
  @Input() id!: number

  constructor(private _router: Router, private _menuFacade: MenuFacade) {
  }

  toProductPage(id: number): void {
    this._menuFacade.setProductId(id)
    this._router.navigate(['restaurant/product']);
  }
}
