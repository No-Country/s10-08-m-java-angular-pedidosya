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
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {restaurantsReducer} from "@root/restaurant/store/reducers/restaurants.reducer";
import {RestaurantEffects} from "@root/restaurant/store/effects/restaurant.effects";
import {HttpClientModule} from "@angular/common/http";
import { LayoutOfCustomerComponent } from './customer/layout-of-customer/layout-of-customer.component';
import { RestaurantTypesComponent } from './components/restaurant-types/restaurant-types.component';
import { RestaurantTypesCardComponent } from './components/restaurant-types-card/restaurant-types-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    RestaurantCardComponent,
    CarouselRestaurantsComponent,
    RestaurantCardForCarouselComponent,
    NavbarComponent,
    LayoutOfCustomerComponent,
    RestaurantTypesComponent,
    RestaurantTypesCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
