import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from '../account/profile/profile.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    FavoritosComponent,
    OrdersComponent,
    ProfileComponent,
    PromotionsComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
