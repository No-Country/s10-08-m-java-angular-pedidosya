import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";

import {MatIconModule} from "@angular/material/icon";
import {
  FilterBottomSheetComponent
} from "@root/restaurant/components/filter-bottom-sheet/filter-bottom-sheet.component";

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule, MatIconModule],
})
export class FilterButtonComponent {
  constructor(private _bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(FilterBottomSheetComponent);
  }
}
