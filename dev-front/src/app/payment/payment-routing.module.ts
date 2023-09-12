import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingDeliveryMainComponent} from "@root/payment/layout/setting-delivery-main/setting-delivery-main.component";
import {SettingPaymentMainComponent} from "@root/payment/layout/setting-payment-main/setting-payment-main.component";
import {PaymentConfirmMainComponent} from "@root/payment/layout/payment-confirm-main/payment-confirm-main.component";
import {SettingAddressMainComponent} from "@root/payment/layout/setting-address-main/setting-address-main.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'confirm', // Redirige la ruta raíz a '/confirm'
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./pages/payment-page/payment.page').then(mod => mod.PaymentPage),
    children: [
      {
        path: 'confirm',
        component: PaymentConfirmMainComponent, // Componente para la confirmación de pago
      },
      {
        path: 'setting-address',
        component: SettingAddressMainComponent, // Componente para la configuración de la dirección de entrega
      },
      {
        path: 'setting-delivery',
        component: SettingDeliveryMainComponent, // Componente para la configuración de la hora de entrega
      },
      {
        path: 'setting-payment',
        component: SettingPaymentMainComponent, // Componente para la configuración de pago
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {
}
