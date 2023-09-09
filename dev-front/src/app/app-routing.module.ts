import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "@root/components/home/home.component";
import { LoginUserComponent } from './login-user/login-user.component';
import { UbiUserComponent } from './ubi-user/ubi-user.component';
import { OnboardingStepsComponent } from './onboarding-steps/onboarding-steps.component';
import { NoPageFoundComponent } from '@root/components/nopagefound/nopagefound.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { PersonalInfoComponent } from './settings-user/personal-info/personal-info.component';
import { SetPersonalInfoComponent } from './settings-user/set-personal-info/set-personal-info.component';

const routes: Routes = [
  // {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  { path: 'home', component: HomeComponent },
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
  { path: 'profile', component: ProfileComponent },
  { path: 'personalInfo', component: PersonalInfoComponent },
  { path: 'setPersonalInfo', component: SetPersonalInfoComponent },
  { path: '', redirectTo: 'auth/loading', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
