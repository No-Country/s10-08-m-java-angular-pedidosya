import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "@root/components/home/home.component";
import { LayoutOfCustomerComponent } from './customer/layout-of-customer/layout-of-customer.component';
import { CustomerModule } from './customer/customer.module';
import { RestaurantTypesComponent } from './components/restaurant-types/restaurant-types.component';

const routes: Routes = [
  // {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  {
    path: 'layoutOfCustomer',
    loadChildren: () => import('./customer/customer.module').then((modulo) => modulo.CustomerModule)
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then(mod => mod.RestaurantModule)
  },
  { path: '', redirectTo: 'auth/loading', pathMatch: 'full' },
  { path: 'all-restaurants', component: RestaurantTypesComponent }
  // {path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
