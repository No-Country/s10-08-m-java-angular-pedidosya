import {Component} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {ButtonLineComponent} from "@root/restaurant/components/button-line/button-line.component";
import {MatIconModule} from "@angular/material/icon";
import {Menu} from "@models/menu.model";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-menu-bottom-sheet',
  templateUrl: './menu-bottom-sheet.component.html',
  styleUrls: ['./menu-bottom-sheet.component.scss'],
  standalone: true,
  imports: [
    ButtonLineComponent,
    NgForOf,
    MatIconModule,
    AsyncPipe
  ]
})
export class MenuBottomSheetComponent {
  topSelling$: Observable<Menu | null>
  discount$: Observable<Menu | null>
  others$: Observable<Menu[] | null>

  constructor(private _bottomSheetRef: MatBottomSheetRef<MenuBottomSheetComponent>, private _menuFacade: MenuFacade) {
    this.topSelling$ = _menuFacade.topSelling$
    this.discount$ = _menuFacade.discounts$
    this.others$ = _menuFacade.others$
  }

  getCountProduct(menu: Menu | null): number {
    if (menu === null) return 0;

    return menu.products.length;
  }


}
