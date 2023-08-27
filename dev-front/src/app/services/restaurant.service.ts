import {Injectable} from '@angular/core';
import {RestaurantModel} from "@models/restaurant.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  /*
  * SERVICIO A REFACTORIZAR SOLO DE EJEMPLO-> LOS DATOS VIENEN DE LA API
  * */

  restaurantsAPI: RestaurantModel[] = [
    {
      id: 0,
      name: "Burguer King",
      minTime: 10,
      maxTime: 15,
      rating: 4.1,
      deliveryCost: 0,
      brandImage: "assets/mocks/brand_bk.png",
      productImage: "assets/mocks/products_bk.png",
    },
    {
      id: 0,
      name: "McDonald´s",
      minTime: 10,
      maxTime: 15,
      rating: 4.1,
      deliveryCost: 0,
      brandImage: "assets/mocks/brand_bk.png",
      productImage: "assets/mocks/products_bk.png",
    }
    , {
      id: 0,
      name: "Residente",
      minTime: 15,
      maxTime: 30,
      rating: 4.3,
      deliveryCost: 499,
      brandImage: "assets/mocks/brand_bk.png",
      productImage: "assets/mocks/products_bk.png",
    },
    {
      id: 0,
      name: "Burguer King",
      minTime: 10,
      maxTime: 15,
      rating: 4.1,
      deliveryCost: 0,
      brandImage: "assets/mocks/brand_bk.png",
      productImage: "assets/mocks/products_bk.png",
    }
  ]


  getAll(): Observable<RestaurantModel[]> {
    //return this.http.get<T>(_urlBase + path);

    //return throwError('Error al cargar los restaurantes desde la API');
    return of(this.restaurantsAPI);
  }

}


