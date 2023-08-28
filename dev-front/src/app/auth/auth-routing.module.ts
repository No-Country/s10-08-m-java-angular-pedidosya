import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthStartComponent} from './components/auth-start/auth-start.component';
import {LoginComponent} from './components/login/login.component';


const routes: Routes = [
  {
    path: '', component: AuthStartComponent, children: [ // auth
      {path: 'login', component: LoginComponent} // auth/login

    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
