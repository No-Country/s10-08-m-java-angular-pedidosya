import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {

    path: '',
    loadComponent: () => import('./pages/restaurant-page/restaurant.page').then(mod => mod.RestaurantPage),
  },
  {
    path: 'details',
    loadComponent: () => import('./pages/restaurant-details/restaurant-details.page').then(mod => mod.RestaurantDetailsPage),
  },
  {
    path: 'product',
    loadComponent: () => import('./pages/product-page/product.page').then(mod => mod.ProductPage),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout-page/checkout-page.component').then(mod => mod.CheckoutPageComponent),
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {
}
