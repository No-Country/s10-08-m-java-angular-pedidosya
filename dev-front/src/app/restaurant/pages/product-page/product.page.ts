import {Component, OnInit} from '@angular/core';
import {ProductModel} from "@models/product.model";
import {Observable, take} from "rxjs";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {ButtonNavBackComponent} from "@shared/components/button-nav-back/button-nav-back.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {OrderFooterComponent} from "@root/restaurant/layout/order-footer/order-footer.component";
import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {Restaurant} from "@models/restaurant.model";
import {Router, RouterOutlet} from "@angular/router";
import {ItemModel} from "@models/item.model";

@Component({
  selector: 'app-products-pages',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [
    ButtonNavBackComponent,
    AsyncPipe,
    NgIf,
    NgForOf,
    OrderFooterComponent,
    RouterOutlet
  ]
})
export class ProductPage implements OnInit {
  product$: Observable<ProductModel | null>
  restaurant$: Observable<Restaurant | null>
  quantity: number = 0


  constructor(private _menuFacade: MenuFacade, private _cartFacade: CartFacade, private _router: Router) {
    this.product$ = _menuFacade.selectedProduct$
    this.restaurant$ = _menuFacade.selectedRestaurant$
  }

  splitText(product: ProductModel | null): string[] {
    if (product === null) {
      return [];
    }
    const parts = product.description.split('.');


    if (parts.length > 0 && parts[parts.length - 1] === '') {
      parts.pop();
    }

    return parts;
  }


  onQuantityChange(quantity: number): void {
    this.quantity = quantity;
  }

  onAddToCart(): void {
    this.product$.pipe(
      take(1),
    ).subscribe((product) => {
      if (product) {
        const item: ItemModel = {product: product, quantity: this.quantity, unitPrice: product.price}
        this._cartFacade.addItemToCart(item);
      }
    });

    this._router.navigate(['restaurant/details'])
  }


  ngOnInit(): void {

    this.product$.pipe(take(1)).subscribe((product) => {
      if (product === null) {
        this._router.navigate(['/restaurant'])
      }
    })

    this.product$.pipe(
      take(1)).subscribe((product) => {
        if (product !== null) {
          this._cartFacade.getQuantitySelected(product).subscribe((quantity) => {
            this.quantity = quantity
          })
        }
      }
    )

  }


}
