import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }
  buttonSelected: String = "inicio";

  changeButtonSelected(seccion: String) {
    this.buttonSelected = seccion;
  }
  redirectTo(page: String) {
    const url = '/' + page;
    this.router.navigateByUrl(url);
  }
}