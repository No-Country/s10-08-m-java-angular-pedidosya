import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '@shared/material.module';
import {SharedModule} from '@shared/shared.module';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {AuthStartComponent} from './components/auth-start/auth-start.component';

import {StoreModule} from '@ngrx/store';
import {authFeatureKey, authReducer} from './state/auth.reducer';
import { LoadingAuthComponent } from './components/loading-auth/loading-auth.component';
import { SelectUserTypeComponent } from './components/select-user-type/select-user-type.component';
import { LocationAccessComponent } from './components/location-access/location-access.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthStartComponent,
    LoadingAuthComponent,
    SelectUserTypeComponent,
    LocationAccessComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, authReducer)
  ]
})
export class AuthModule {
}
