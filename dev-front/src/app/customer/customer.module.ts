import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { FavoritosComponent } from './favoritos-root/favoritos/favoritos.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile-root/profile/profile.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { StartComponent } from './start/start.component';
import { PersonalInformationComponent } from './profile-root/personal-information/personal-information.component';
import { PersonalDataComponent } from './profile-root/personal-data/personal-data.component';
import { FoodPreferencesComponent } from './profile-root/food-preferences/food-preferences.component';
import { NotificationPreferencesComponent } from './profile-root/notification-preferences/notification-preferences.component';
import { MostSeenComponent } from './profile-root/most-seen/most-seen.component';
import { ValidateMailComponent } from './profile-root/validate-mail/validate-mail.component';
import { ValidateCellNumberComponent } from './profile-root/validate-cell-number/validate-cell-number.component';
import { MyAddressesComponent } from './profile-root/my-addresses/my-addresses.component';
import { AddAdressComponent } from './profile-root/add-adress/add-adress.component';


@NgModule({
  declarations: [
    FavoritosComponent,
    OrdersComponent,
    ProfileComponent,
    PromotionsComponent,
    StartComponent,
    PersonalInformationComponent,
    PersonalDataComponent,
    FoodPreferencesComponent,
    NotificationPreferencesComponent,
    MostSeenComponent,
    ValidateMailComponent,
    ValidateCellNumberComponent,
    MyAddressesComponent,
    AddAdressComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
