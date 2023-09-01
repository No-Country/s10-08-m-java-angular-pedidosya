import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthStartComponent} from './components/auth-start/auth-start.component';
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoadingAuthComponent } from './components/loading-auth/loading-auth.component';
import { LocationAccessComponent } from './components/location-access/location-access.component';
import { SelectUserTypeComponent } from './components/select-user-type/select-user-type.component';


const routes: Routes = [
  {
    path: '', component: AuthStartComponent, children: [ // auth
      {path: 'loading', component: LoadingAuthComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'locationAccess', component: LocationAccessComponent},
      {path: 'selectUserType', component: SelectUserTypeComponent},
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
