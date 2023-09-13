import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { CarouselRestaurantsComponent } from './components/carousel-restaurants/carousel-restaurants.component';
import {
  RestaurantCardForCarouselComponent
} from './components/restaurant-card-for-carousel/restaurant-card-for-carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { restaurantsReducer } from "@root/restaurant/store/reducers/restaurants.reducer";
import { RestaurantEffects } from "@root/restaurant/store/effects/restaurant.effects";
import { HttpClientModule } from "@angular/common/http";
import { LayoutOfCustomerComponent } from './customer/layout-of-customer/layout-of-customer.component';
import { RestaurantTypesComponent } from './components/restaurant-types/restaurant-types.component';
import { RestaurantTypesCardComponent } from './components/restaurant-types-card/restaurant-types-card.component';
import { menuReducer } from "@root/restaurant/store/reducers/menu.reducers";
import { MenuEffects } from "@root/restaurant/store/effects/menu.effects";
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from "@abacritt/angularx-social-login";
import { orderReducer} from "@root/restaurant/store/reducers/cart.reducers";
import { NoPageFoundComponent } from "@root/components/nopagefound/nopagefound.component";
import { PersonalInfoComponent } from './account/personal-info/personal-info.component';
import { SharedModule } from "@shared/shared.module";
import { SetPersonalInfoComponent } from './account/set-personal-info/set-personal-info.component';
import { SeekerOfHomeComponent } from './components/seeker-of-home/seeker-of-home.component';
import { ModaladdressesComponent } from './components/modaladdresses/modaladdresses.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutOfCustomerComponent,
    HomeComponent,
    RestaurantCardComponent,
    CarouselRestaurantsComponent,
    RestaurantCardForCarouselComponent,
    NavbarComponent,
    LayoutOfCustomerComponent,
    RestaurantTypesComponent,
    RestaurantTypesCardComponent,
    NoPageFoundComponent,
    PersonalInfoComponent,
    SetPersonalInfoComponent,
    SeekerOfHomeComponent,
    ModaladdressesComponent,
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
      order: orderReducer
    }, {}),
    EffectsModule.forRoot([RestaurantEffects, MenuEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            // provider: new GoogleLoginProvider('Google-Client-ID-Goes-Here'),
            provider: new GoogleLoginProvider('278396799577-fisteuqeck859nu3abh9rjr627461m7i.apps.googleusercontent.com')

          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
