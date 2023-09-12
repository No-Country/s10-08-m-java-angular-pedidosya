import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@root/components/home/home.component";
import {LoginUserComponent} from './login-user/login-user.component';
import {UbiUserComponent} from './ubi-user/ubi-user.component';
import {OnboardingStepsComponent} from './onboarding-steps/onboarding-steps.component';
import {NoPageFoundComponent} from '@root/components/nopagefound/nopagefound.component';

const routes: Routes = [
  // {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  {path: 'home', component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule)
  },
  {
    path: 'layoutOfCustomer',
    loadChildren: () => import('./customer/customer.module').then((modulo) => modulo.CustomerModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then(mod => mod.RestaurantModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(mod => mod.PaymentModule)
  },
  {path: 'choose-role', component: LoginUserComponent},
  {path: 'activate-ubication', component: UbiUserComponent},
  {path: 'onboarding', component: OnboardingStepsComponent},
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: '**', component: NoEncontradoComponent },
  {path: '', redirectTo: 'auth/loading', pathMatch: 'full'},
  {path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
