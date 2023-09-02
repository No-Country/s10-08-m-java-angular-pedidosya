import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "@shared/material.module";
import {FilterButtonComponent} from "@root/restaurant/components/filter-button/filter-button.component";
import {SearchInputComponent} from "@root/restaurant/components/search-input/search-input.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ButtonNavBackComponent} from "@root/restaurant/components/button-nav-back/button-nav-back.component";
import {RestaurantFilter} from "@shared/filters/restaurant-filter.interface";
import {Store} from "@ngrx/store";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.component.html',
  styleUrls: ['./restaurant-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MaterialModule,
    FilterButtonComponent,
    SearchInputComponent,
    FormsModule,
    ButtonNavBackComponent
  ]
})
export class RestaurantHeaderComponent {
  selectedNavigationFilters: string[] = [];

  constructor(private store: Store) {
  }

  onSelectionChange(): void {
    const newFilterNav = <Partial<RestaurantFilter>>{
      navigationFilters: this.selectedNavigationFilters
    }

    this.store.dispatch(RestaurantsActions.updateRestaurantFilter({filtersSelected: newFilterNav}));

  }


  onSearchTermChange(searchTerm: string): void {
    const newSearchTerm = <Partial<RestaurantFilter>>{
      searchTerm: searchTerm
    }
    this.store.dispatch(RestaurantsActions.updateRestaurantFilter({filtersSelected: newSearchTerm}));
  }


}
