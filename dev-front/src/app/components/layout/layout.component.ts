import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  
  mostrarMenu: boolean = false;

  toggleDireccionMenu() {
    console.log(this.mostrarMenu);
    this.mostrarMenu = !this.mostrarMenu;
    console.log(this.mostrarMenu);
  }

}
