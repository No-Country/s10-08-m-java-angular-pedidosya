import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "@root/components/home/home.component";
import { LoginUserComponent } from './login-user/login-user.component';
import { UbiUserComponent } from './ubi-user/ubi-user.component';
import { OnboardingStepsComponent } from './onboarding-steps/onboarding-steps.component';

const routes: Routes = [
  // {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then(mod => mod.RestaurantModule)
  },
  { path: 'choose-role', component: LoginUserComponent },
  { path: 'activate-ubication', component: UbiUserComponent },
  { path: 'onboarding', component: OnboardingStepsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
