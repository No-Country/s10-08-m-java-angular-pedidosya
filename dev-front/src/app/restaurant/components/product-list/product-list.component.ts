import {Component, Input} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ProductModel} from "@models/product.model";
import {ProductCardComponent} from "@root/restaurant/components/product-card/product-card.component";
import {SharedModule} from "@shared/shared.module";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {Router} from "@angular/router";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [ProductCardComponent, NgIf, NgForOf, SharedModule, AsyncPipe]
})
export class ProductListComponent {
  @Input() products: ProductModel[] | null = null;
  @Input() isScrolling: boolean = true;
  @Input() title!: string


  constructor(private _router: Router, private _menuFacade: MenuFacade, private _cartFacade: CartFacade) {
  }

  toProductPage(id: number): void {
    this._menuFacade.setProductId(id)
    this._router.navigate(['restaurant/products']);
  }

  getQuantityBy(product: ProductModel): Observable<number> {
    return this._cartFacade.getQuantitySelected(product)
  }

}
