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
import {LayoutOfCustomerComponent} from './customer/layout-of-customer/layout-of-customer.component';
import {menuReducer} from "@root/restaurant/store/reducers/menu.reducers";
import {MenuEffects} from "@root/restaurant/store/effects/menu.effects";
import {SharedModule} from "@shared/shared.module";
import {cartReducer} from "@root/restaurant/store/reducers/cart.reducers";

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({
      restaurants: restaurantsReducer,
      menus: menuReducer,
      cart: cartReducer
    }, {}),
    EffectsModule.forRoot([RestaurantEffects, MenuEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
