import {Injectable} from '@angular/core';
import {Restaurant, RestaurantModel} from "@models/restaurant.model";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  /*
  * SERVICIO A REFACTORIZAR Mockups-> LOS DATOS DEBEN VIENEN DE LA API
  * */

  restaurantsAPI: RestaurantModel[] = [
    {
      id: 0,
      name: "Burguer King",
      minTime: 10,
      maxTime: 15,
      rating: 4.1,
      deliveryCost: 1000,
      brandImage: "assets/mocks/brand_bk.png",
      productImage: "assets/mocks/products_bk.png",
      favorite: true,
      takeAway: false,
      products: []
    },
    {
      id: 0,
      name: "McDonald´s",
      minTime: 10,
      maxTime: 30,
      rating: 4.1,
      deliveryCost: 0,
      brandImage: "assets/mocks/brand_mc.png",
      productImage: "assets/mocks/products_mc.png",
      favorite: true,
      takeAway: false,
      products: []
    }
    , {
      id: 0,
      name: "Residente",
      minTime: 15,
      maxTime: 60,
      rating: 4.3,
      deliveryCost: 499,
      brandImage: "assets/mocks/brand_r.png",
      productImage: "assets/mocks/product_r.png",
      favorite: false,
      takeAway: true,
      products: []
    },
    {
      id: 0,
      name: "Burguer Queen",
      minTime: 10,
      maxTime: 15,
      rating: 4.1,
      deliveryCost: 600,
      brandImage: "assets/mocks/brand_bk.png",
      productImage: "assets/mocks/products_bk.png",
      favorite: false,
      takeAway: true,
      products: []
    },
    {
      id: 0,
      name: "Burguer Prince",
      minTime: 10,
      maxTime: 15,
      rating: 2,
      deliveryCost: 600,
      brandImage: "assets/mocks/brand_bk.png",
      productImage: "assets/mocks/products_bk.png",
      favorite: false,
      takeAway: true,
      products: []
    }
  ]


  getAll(): Observable<Restaurant[]> {
    //return this.http.get<T>(_urlBase + path);

    //TODO: REFACTOR? MAPEO A CLASE
    let restaurants = this.restaurantsAPI.map(apiRestaurant =>
      new Restaurant(
        apiRestaurant.id,
        apiRestaurant.name,
        apiRestaurant.minTime,
        apiRestaurant.maxTime,
        apiRestaurant.rating,
        apiRestaurant.deliveryCost,
        apiRestaurant.brandImage,
        apiRestaurant.productImage,
        apiRestaurant.favorite,
        apiRestaurant.takeAway,
        apiRestaurant.products
      )
    )

    //return throwError('Error al cargar los restaurantes desde la API');
    return of(restaurants).pipe(delay(1000));
  }

}


