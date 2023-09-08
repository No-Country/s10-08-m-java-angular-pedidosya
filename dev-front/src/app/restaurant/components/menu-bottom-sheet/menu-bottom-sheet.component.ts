import {Component} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-menu-bottom-sheet',
  templateUrl: './menu-bottom-sheet.component.html',
  styleUrls: ['./menu-bottom-sheet.component.scss'],
  standalone: true,
  imports: []
})
export class MenuBottomSheetComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<MenuBottomSheetComponent>) {

  }


}
