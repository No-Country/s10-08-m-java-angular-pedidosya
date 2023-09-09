import {Component} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MenuFacade} from "@root/restaurant/store/facades/menu.facade";
import {MatIconModule} from "@angular/material/icon";
import {Menu} from "@models/menu.model";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ButtonLineComponent} from "@shared/components/button-line/button-line.component";

@Component({
  selector: 'app-menu-bottom-sheet',
  templateUrl: './menu-bottom-sheet.component.html',
  styleUrls: ['./menu-bottom-sheet.component.scss'],
  standalone: true,
  imports: [
    ButtonLineComponent,
    NgForOf,
    MatIconModule,
    AsyncPipe,
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
