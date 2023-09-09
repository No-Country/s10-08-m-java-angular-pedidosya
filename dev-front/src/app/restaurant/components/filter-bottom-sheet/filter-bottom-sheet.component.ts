import {Component, OnInit} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RestaurantModule} from "@root/restaurant/restaurant.module";
import {
  FilterCheckboxFormComponent
} from "@root/restaurant/components/filter-checkbox-form/filter-checkbox-form.component";
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {NgForOf, NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {map} from "rxjs";
import {selectFilterSelected, selectSortedBy} from "@root/restaurant/store/selectors/restaurants.selector";
import {RestaurantFilter} from "@shared/filters/restaurant-filter.interface";
import {RestaurantsActions} from "@root/restaurant/store/actions/restaurants.actions";
import {RestaurantSortedBy} from "@shared/enums/restaurant-sorted-by";
import {ButtonLineComponent} from "@root/restaurant/components/button-line/button-line.component";

@Component({
  selector: 'app-filter-bottom-sheet',
  templateUrl: './filter-bottom-sheet.component.html',
  styleUrls: ['./filter-bottom-sheet.component.scss'],
  standalone: true,
    imports: [MatListModule, MatIconModule, MatButtonModule, RestaurantModule, FilterCheckboxFormComponent, MatButtonToggleModule, FormsModule, NgIf, NgForOf, ButtonLineComponent],
})
export class FilterBottomSheetComponent implements OnInit {

  buttonToggleInfo = [
    {
      value: RestaurantSortedBy.Recommended,
      icon: 'filter_list',
      label: 'Sugeridos'
    },
    {
      value: RestaurantSortedBy.TopRating,
      icon: 'hotel_class',
      label: 'Más puntuados'
    },
    {
      value: RestaurantSortedBy.FasterDelivery,
      icon: 'schedule',
      label: 'Más rápidos'
    },
    {
      value: RestaurantSortedBy.Proximity,
      icon: 'location_on',
      label: 'Más cercanos'
    }
  ];
  sortedBy: RestaurantSortedBy = RestaurantSortedBy.Recommended;
  filtersApplied = false;

  benefitsForm: FormGroup;
  paymentForm: FormGroup;
  otherForm: FormGroup;

  constructor(private _bottomSheetRef: MatBottomSheetRef<FilterBottomSheetComponent>, private _formBuilder: FormBuilder, private _store: Store) {
    this.benefitsForm = this.createFormGroup({
      discounts: false,
      freeDelivery: false,
      fasterDelivery: false,
    });

    this.paymentForm = this.createFormGroup({
      card: false,
      cash: false,
    });

    this.otherForm = this.createFormGroup({
      favorite: false,
      newRestaurants: false,
      lowerCost: false,
      takeAway: false,
    });
  }

  handleApplyFilter() {
    const benefitsFormValue = this.benefitsForm.value;
    const paymentFormValue = this.paymentForm.value;
    const otherFormValue = this.otherForm.value;

    const filtersSelected: Partial<RestaurantFilter> = {
      filtersCustom: {
        benefit: {
          hasDiscount: benefitsFormValue.discounts,
          freeDelivery: benefitsFormValue.freeDelivery,
          fasterDelivery: benefitsFormValue.fasterDelivery,
        },
        payment: {
          cash: paymentFormValue.cash,
          card: paymentFormValue.card,
        },
        others: {
          favorite: otherFormValue.favorite,
          lowerCost: otherFormValue.lowerCost,
          takeAway: otherFormValue.takeAway,
          newRestaurants: otherFormValue.newRestaurants,
        },
        isActivated: true,
      },
    };
    this._store.dispatch(RestaurantsActions.updateRestaurantFilter({filtersSelected}));
    this._store.dispatch(RestaurantsActions.updateRestaurantSortedBy({sortedBy: this.sortedBy}))
    this._bottomSheetRef.dismiss();
  }

  handleDeleteFilter() {
    this._store.dispatch(RestaurantsActions.resetRestaurantFilter())
    this._bottomSheetRef.dismiss();
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    // Suscripción a cambios en selectFilterSelected para inicializar los formularios
    this._store.select(selectFilterSelected).pipe(
      map(({filtersCustom: {benefit, payment, others, isActivated}}) => {
        this.benefitsForm.setValue({
          discounts: benefit.hasDiscount,
          freeDelivery: benefit.freeDelivery,
          fasterDelivery: benefit.fasterDelivery,
        });

        this.paymentForm.setValue({
          card: payment.card,
          cash: payment.cash,
        });

        this.otherForm.setValue({
          favorite: others.favorite,
          newRestaurants: others.newRestaurants,
          lowerCost: others.lowerCost,
          takeAway: others.takeAway,
        });

        this.filtersApplied = isActivated;
      })
    ).subscribe();

    this._store.select(selectSortedBy).pipe(
      map((sortedBy) => {
        this.sortedBy = sortedBy;
      })
    ).subscribe();
  }

  private createFormGroup(initialValues: { [key: string]: any }): FormGroup {
    return this._formBuilder.group(initialValues);
  }
}
