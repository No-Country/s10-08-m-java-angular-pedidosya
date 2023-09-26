import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutOfCustomerComponent } from './layout-of-customer/layout-of-customer.component';
import { HomeComponent } from '@root/components/home/home.component';
import { FavoritosComponent } from './favoritos-root/favoritos/favoritos.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile-root/profile/profile.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PersonalInformationComponent } from './profile-root/personal-information/personal-information.component';
import { PersonalDataComponent } from './profile-root/personal-data/personal-data.component';
import { NotificationPreferencesComponent } from './profile-root/notification-preferences/notification-preferences.component';
import { MyAddressesComponent } from './profile-root/my-addresses/my-addresses.component';
import { MostSeenComponent } from './profile-root/most-seen/most-seen.component';
import { FoodPreferencesComponent } from './profile-root/food-preferences/food-preferences.component';
import { AddAdressComponent } from './profile-root/add-adress/add-adress.component';
import { ValidateCellNumberComponent } from './profile-root/validate-cell-number/validate-cell-number.component';
import { ValidateMailComponent } from './profile-root/validate-mail/validate-mail.component';
import { RestaurantTypesComponent } from '@root/components/restaurant-types/restaurant-types.component';

const routes: Routes = [
  {
    path: '', component: LayoutOfCustomerComponent, children: [
      //root de cada seccion
      { path: 'home', component: HomeComponent },
      { path: 'favoritos', component: FavoritosComponent },
      { path: 'pedidos', component: OrdersComponent },
      { path: 'perfil', component: ProfileComponent },
      { path: 'promos', component: PromotionsComponent },
      //paths de perfil
      { path: 'NotificationPreferences', component: NotificationPreferencesComponent },
      { path: 'MyAddresses', component: MyAddressesComponent },
      { path: 'MostSeen', component: MostSeenComponent },
      { path: 'FoodPreferences', component: FoodPreferencesComponent },
      { path: 'AddAdress', component: AddAdressComponent },
      { path: 'PersonalData', component: PersonalDataComponent },
      { path: 'PersonalInformation', component: PersonalInformationComponent },
      { path: 'ValidateCell', component: ValidateCellNumberComponent },
      { path: 'ValidateMail', component: ValidateMailComponent },
      { path: 'foodTypes', component: RestaurantTypesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
