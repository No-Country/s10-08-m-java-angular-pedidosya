import {Component, OnInit} from '@angular/core';
import {
  RestaurantDetailsHeaderComponent
} from "@root/restaurant/layout/restaurant-details-header/restaurant-details-header.component";
import {
  RestaurantDeliveryInfoComponent
} from "@root/restaurant/components/restaurant-delivery-info/restaurant-delivery-info.component";
import {MatTabsModule} from "@angular/material/tabs";
import {ProductCardComponent} from "@root/restaurant/components/product-card/product-card.component";
import {SearchInputComponent} from "@shared/components/search-input/search-input.component";
import {
  RestaurantDetailsMainComponent
} from "@root/restaurant/layout/restaurant-details-main/restaurant-details-main.component";
import {Menu} from "@models/menu.model";
import {MenuButtonComponent} from "@root/restaurant/components/menu-button/menu-button.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {Restaurant} from "@models/restaurant.model";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {ButtonNavBackComponent} from "@shared/components/button-nav-back/button-nav-back.component";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
  standalone: true,
  imports: [
    RestaurantDetailsHeaderComponent,
    RestaurantDeliveryInfoComponent,
    SearchInputComponent,
    MatTabsModule,
    ProductCardComponent,
    RestaurantDetailsMainComponent,
    MenuButtonComponent,
    MatButtonToggleModule,
    FormsModule,
    AsyncPipe,
    NgIf,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    ButtonNavBackComponent,
    NgForOf,
    MatProgressSpinnerModule,
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


  constructor(private _menuFacade: MenuFacade) {
    this.restaurant$ = _menuFacade.selectedRestaurant$;
    this.menuTopSelling$ = _menuFacade.topSelling$;
    this.menuDiscounts$ = _menuFacade.discounts$;
    this.menuOthers$ = _menuFacade.others$;
    this.isLoading$ = _menuFacade.isLoading$;
    this.errorMessage$ = _menuFacade.errorMessage$;
    this.searchTerm$ = _menuFacade.searchTerm$;

  }

  onSearchTermChange(text: string) {
    this._menuFacade.updateSearchTerm(text)
  }

  ngOnInit(): void {
    this._menuFacade.loadMenus()
    this.isLoading$ = this._menuFacade.isLoading$;
    this.searchTerm$ = this._menuFacade.searchTerm$

  }


}
