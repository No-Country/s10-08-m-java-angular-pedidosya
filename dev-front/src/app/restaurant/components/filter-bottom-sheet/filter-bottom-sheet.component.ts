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
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-filter-bottom-sheet',
  templateUrl: './filter-bottom-sheet.component.html',
  styleUrls: ['./filter-bottom-sheet.component.scss'],
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, RestaurantModule, FilterCheckboxFormComponent, MatButtonToggleModule, FormsModule, NgIf],
})
export class FilterBottomSheetComponent implements OnInit {

  sortedBy: string = 'standard';
  filtersApplied = false;

  benefitsForm: FormGroup;
  paymentForm: FormGroup;
  otherForm: FormGroup;

  constructor(private _bottomSheetRef: MatBottomSheetRef<FilterBottomSheetComponent>, private _formBuilder: FormBuilder) {
    this.benefitsForm = this._formBuilder.group({
      discounts: false,
      coupons: false,
      freeShipping: false,
      fasterShipping: false,
    });

    this.paymentForm = this._formBuilder.group({
      card: false,
      cash: false,
    });

    this.otherForm = this._formBuilder.group({
      favorite: false,
      new: false,
      lowCost: false,
      takeAway: false,
    });
  }


  handleApplyFilter() {
    console.log("Apply Filter")
    this._bottomSheetRef.dismiss();
  }

  handleDeleteFilter() {
    console.log("Deleter Filter")
    this._bottomSheetRef.dismiss();

  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    // Escuchar cambios en benefitsForm
    this.benefitsForm.valueChanges.subscribe((newValues) => {
      console.log("Cambios en benefitsForm:", newValues);
      // Puedes realizar acciones en respuesta a los cambios aquí
    });

    // Escuchar cambios en paymentForm
    this.paymentForm.valueChanges.subscribe((newValues) => {
      console.log("Cambios en paymentForm:", newValues);
      // Puedes realizar acciones en respuesta a los cambios aquí
    });

    // Escuchar cambios en otherForm
    this.otherForm.valueChanges.subscribe((newValues) => {
      console.log("Cambios en otherForm:", newValues);
      // Puedes realizar acciones en respuesta a los cambios aquí
    });

  }




}
