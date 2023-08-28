import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@root/components/home/home.component";
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  // {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  {path: 'home', component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then(mod => mod.RestaurantModule)
  },
  {path: 'onboarding' , component: LoginUserComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
