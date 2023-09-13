import { Component } from '@angular/core';

@Component({
  selector: 'app-modaladdresses',
  templateUrl: './modaladdresses.component.html',
  styleUrls: ['./modaladdresses.component.scss']
})
export class ModaladdressesComponent {
  mostrarMenu: boolean = true;

  toggleDireccionMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }
}

