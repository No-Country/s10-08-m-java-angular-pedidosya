import {Injectable} from '@angular/core';
import {Restaurant} from "@models/restaurant.model";
import {Store} from "@ngrx/store";
import {RestaurantSortedBy} from "@shared/enums/restaurant-sorted-by";
import {map, Observable} from "rxjs";
import {selectSortedBy} from "@root/restaurant/store/selectors/restaurants.selector";

@Injectable({
  providedIn: 'root'
})
/**
 * Service for sorting restaurants based on different criteria.
 *
 * This service provides methods to sort a list of restaurants based on various sorting criteria.
 *
 * @export
 * @class RestaurantSorterService
 */
export class RestaurantSorterService {
  /**
   * Observable representing the sorting criteria for restaurants.
   *
   * This observable holds the current sorting criteria for a list of restaurants.
   * It emits values of the type 'RestaurantSortedBy'.
   *
   * @type {Observable<RestaurantSortedBy>}
   * @memberof RestaurantSorterService
   */
  sortedBy$: Observable<RestaurantSortedBy>;

  constructor(private _store: Store) {
    this.sortedBy$ = this._store.select(selectSortedBy)
  }
  /**
   * Applies sorting to a list of restaurants based on the selected sorting criteria.
   *
   * @param {Restaurant[]} restaurants - The list of restaurants to sort.
   * @return {Observable<Restaurant[]>} - An observable emitting the sorted list of restaurants.
   */
  applySort(restaurants: Restaurant[]): Observable<Restaurant[]> {
    return this.sortedBy$.pipe(
      map((sortedBy) => {
        switch (sortedBy) {
          case RestaurantSortedBy.TopRating:
            return this.sortRestaurantsByRatingDescending(restaurants);
          case RestaurantSortedBy.FasterDelivery:
            return this.sortRestaurantsByFasterDeliveryDescending(restaurants);
          case RestaurantSortedBy.Proximity:
            return this.sortRestaurantsByProximity(restaurants);
          case RestaurantSortedBy.Recommended:
            return this.sortRestaurantsByFavorite(restaurants);

          default:
            return restaurants;
        }
      })
    );
  }


  /**
   * Sorts a list of restaurants by rating in descending order.
   *
   * @param restaurants The list of restaurants to sort.
   * @return The list of restaurants sorted by rating in descending order.
   */
  sortRestaurantsByRatingDescending(restaurants: Restaurant[]): Restaurant[] {
    return restaurants.sort((a, b) => b.rating - a.rating);
  }

  /**
   * Sorts a list of restaurants by maxTime in descending order.
   *
   * @param restaurants The list of restaurants to sort.
   * @return The list of restaurants sorted by maxTime in descending order.
   */
  sortRestaurantsByFasterDeliveryDescending(restaurants: Restaurant[]): Restaurant[] {
    return restaurants.sort((a, b) => a.maxTime - b.maxTime);
  }

  /**
   * Sorts a list of restaurants by proximity.
   *
   * @param {Restaurant[]} restaurants - The list of restaurants to sort.
   * @return {Restaurant[]} - The list of restaurants sorted by proximity.
   */
  sortRestaurantsByProximity(restaurants: Restaurant[]): Restaurant[] {
    // TODO:TO IMPLEMENTS
    console.log("A implementar por proximidad")

    return restaurants;
  }

  /**
   * Sorts a list of restaurants by favorite status, with favorites appearing first.
   *
   * @param {Restaurant[]} restaurants - The list of restaurants to sort.
   * @return {Restaurant[]} - The list of restaurants sorted by favorite status.
   */
  sortRestaurantsByFavorite(restaurants: Restaurant[]): Restaurant[] {
    //TODO: To Review <- Que seria recomendado?
    return restaurants.sort((a, b) => {
      if (a.favorite && !b.favorite) {
        return -1;
      } else if (!a.favorite && b.favorite) {
        return 1;
      } else {
        return 0;
      }
    });
  }


}
