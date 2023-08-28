import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutComponent} from './components/layout/layout.component';
import {HomeComponent} from './components/home/home.component';
import {RestaurantCardComponent} from './components/restaurant-card/restaurant-card.component';
import {CarouselRestaurantsComponent} from './components/carousel-restaurants/carousel-restaurants.component';
import {
  RestaurantCardForCarouselComponent
} from './components/restaurant-card-for-carousel/restaurant-card-for-carousel.component';
import {NavbarComponent} from './components/navbar/navbar.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { RegisterComponent } from './auth/components/register/register.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { RegisterComponent } from './auth/components/register/register.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {restaurantsReducer} from "@root/restaurant/store/reducers/restaurants.reducer";
import {RestaurantEffects} from "@root/restaurant/store/effects/restaurant.effects";
import { LoginUserComponent } from './login-user/login-user.component';
import { UbiUserComponent } from './ubi-user/ubi-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    RestaurantCardComponent,
    CarouselRestaurantsComponent,
    RestaurantCardForCarouselComponent,
    NavbarComponent,
    LoginUserComponent,
    UbiUserComponent
    // LoginComponent,
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      restaurants: restaurantsReducer,
    }, {}),
    EffectsModule.forRoot([RestaurantEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
