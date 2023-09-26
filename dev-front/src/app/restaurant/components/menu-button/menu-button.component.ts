import {Component} from '@angular/core';

import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MenuBottomSheetComponent} from "@root/restaurant/components/menu-bottom-sheet/menu-bottom-sheet.component";

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule, MatIconModule]
})
export class MenuButtonComponent {

  constructor(private _bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(MenuBottomSheetComponent);
  }

}
