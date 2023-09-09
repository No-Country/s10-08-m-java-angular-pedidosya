import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutOfCustomerComponent } from './layout-of-customer/layout-of-customer.component';
import { HomeComponent } from '@root/components/home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { OrdersComponent } from './orders/orders.component';
// import { ProfileComponent } from '../account/profile/profile.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path: '', component: LayoutOfCustomerComponent, children: [// auth
      {path: 'home', component: HomeComponent},
      {path: 'favoritos', component: FavoritosComponent},
      {path: 'pedidos', component: OrdersComponent},
      // {path: 'perfil', component: ProfileComponent},
      {path: 'promos', component: PromotionsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
