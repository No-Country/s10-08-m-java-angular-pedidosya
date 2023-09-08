import {Component, OnInit} from '@angular/core';
import {
  RestaurantDetailsHeaderComponent
} from "@root/restaurant/layout/restaurant-details-header/restaurant-details-header.component";
import {SearchInputComponent} from "@shared/components/search-input/search-input.component";
import {
  RestaurantDetailsMainComponent
} from "@root/restaurant/layout/restaurant-details-main/restaurant-details-main.component";
import {Menu} from "@models/menu.model";
import {MenuButtonComponent} from "@root/restaurant/components/menu-button/menu-button.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Restaurant} from "@models/restaurant.model";
import {Observable, take} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {ButtonNavBackComponent} from "@shared/components/button-nav-back/button-nav-back.component";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import {CartFacade} from "@root/restaurant/store/facades/cart.facade";
import {
  RestaurantDetailsFooterComponent
} from "@root/restaurant/layout/restaurant-details-footer/restaurant-details-footer.component";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
  standalone: true,
  imports: [
    RestaurantDetailsHeaderComponent,
    AsyncPipe,
    ButtonNavBackComponent,
    SearchInputComponent,
    MenuButtonComponent,
    MatButtonToggleModule,
    NgForOf,
    RestaurantDetailsMainComponent,
    RestaurantDetailsFooterComponent,
    NgIf,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    RouterLink
  ]
})
export class RestaurantDetailsPage implements OnInit {
  selectedNavigation: string = ''
  searchTerm$: Observable<string>
  restaurant$: Observable<Restaurant | null>;
  menuTopSelling$: Observable<Menu | null>;
  menuDiscounts$: Observable<Menu | null>;
  menuOthers$: Observable<Menu[] | null>;
  isLoading$: Observable<boolean>
  errorMessage$: Observable<string | null>
  subtotal: number


  constructor(private _menuFacade: MenuFacade, private _cartFacade: CartFacade, private _router: Router) {
    this.restaurant$ = _menuFacade.selectedRestaurant$;
    this.menuTopSelling$ = _menuFacade.topSelling$;
    this.menuDiscounts$ = _menuFacade.discounts$;
    this.menuOthers$ = _menuFacade.others$;
    this.isLoading$ = _menuFacade.isLoading$;
    this.errorMessage$ = _cartFacade.errorMessage$;
    this.searchTerm$ = _menuFacade.searchTerm$;
    this.subtotal = 0

  }

  onSearchTermChange(text: string) {
    this._menuFacade.updateSearchTerm(text)
  }

  ngOnInit(): void {
    this._menuFacade.loadMenus()
    this.isLoading$ = this._menuFacade.isLoading$;
    this.searchTerm$ = this._menuFacade.searchTerm$


    this.restaurant$.pipe(take(1)).subscribe((restaurant) => {
      if (restaurant === null) {
        this._router.navigate(['/restaurant'])
      } else {
        this._cartFacade.initCart(restaurant)
      }
    })

    this._cartFacade.getTotal().subscribe((subtotal) => {
      this.subtotal = subtotal
    })


  }


}
