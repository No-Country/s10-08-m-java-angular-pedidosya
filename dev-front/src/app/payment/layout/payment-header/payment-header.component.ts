import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonNavBackComponent} from "@shared/components/button-nav-back/button-nav-back.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payment-header',
  standalone: true,
  imports: [CommonModule, ButtonNavBackComponent],
  templateUrl: './payment-header.component.html',
  styleUrls: ['./payment-header.component.scss']
})
export class PaymentHeaderComponent implements OnInit {
  pageTitle: string = '';
  path: string = ''

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.path = this.route.snapshot.firstChild?.url[0].path ?? ''
    this.updatePageTitle()
  }

  updatePageTitle() {
    // Define lógica para asignar títulos según la subruta
    switch (this.path) {
      case 'confirm':
        this.pageTitle = 'Confirmar Pedido';
        break;
      case 'setting-delivery':
        this.pageTitle = 'Tiempo de Entrega';
        break;
      case 'setting-address':
        this.pageTitle = 'Dirección de Entrega';
        break;
      case 'setting-payment':
        this.pageTitle = 'Pago en efectivo';
        break;
      case 'order-status':
        this.pageTitle = 'Mi pedido';
        break;
      default:
        this.pageTitle = '';
        break;
    }
  }

  goBack() {

    // Implementa la función para volver atrás aquí
  }

}
