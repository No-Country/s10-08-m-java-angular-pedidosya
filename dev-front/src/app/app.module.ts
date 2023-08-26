import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { CarouselRestaurantsComponent } from './components/carousel-restaurants/carousel-restaurants.component';
import { RestaurantCardForCarouselComponent } from './components/restaurant-card-for-carousel/restaurant-card-for-carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { RegisterComponent } from './auth/components/register/register.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    RestaurantCardComponent,
    CarouselRestaurantsComponent,
    RestaurantCardForCarouselComponent,
    NavbarComponent
    // LoginComponent,
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
