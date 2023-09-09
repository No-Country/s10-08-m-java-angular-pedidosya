import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SetPersonalInfoComponent } from './set-personal-info/set-personal-info.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountStartComponent } from './account-start/account-start.component';

const routes: Routes = [
  {
		path: '',
		component: AccountStartComponent,
		children: [
      { path: '', component: ProfileComponent },
			{ path: 'detail', component: PersonalInfoComponent }, // auth/login
			{ path: 'update-perfil', component: SetPersonalInfoComponent },
		],    
  }  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
