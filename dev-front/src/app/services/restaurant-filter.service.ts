import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {map, Observable} from 'rxjs';
import {selectFilterSelected} from '@root/restaurant/store/selectors/restaurants.selector';
import {Restaurant} from '@models/restaurant.model';
import {
  RestaurantBenefitFilter,
  RestaurantCustomFilter,
  RestaurantFilter,
  RestaurantOthersFilter,
  RestaurantPaymentFilter,
} from '@shared/filters/restaurant-filter.interface';
import {NavigationFilterType} from "@shared/enums/navigation-filter-type";

/**
 * Service for applying filters to a list of restaurants.
 */
@Injectable({
  providedIn: 'root',
})
export class RestaurantFilterService {
  /**
   * Observable representing the currently selected restaurant filters.
   *
   * This observable holds the selected filters for restaurants and can be subscribed
   * to for updates when the filters change.
   *
   * @type {Observable<RestaurantFilter>}
   */
  selectedFilters$: Observable<RestaurantFilter>;

  /**
   * Creates an instance of the RestaurantFilterService.
   *
   * @constructor
   * @param {Store} store - The Redux store to manage restaurant filters.
   */
  constructor(private store: Store) {
    this.selectedFilters$ = this.store.select(selectFilterSelected);
  }

  /**
   * Applies the selected filters to a list of restaurants.
   *
   * @param restaurants The list of restaurants to filter.
   * @return An Observable emitting the filtered list of restaurants.
   */
  public applyFilter(restaurants: Restaurant[]): Observable<Restaurant[]> {
    return this.selectedFilters$.pipe(
      map((selectedFilters) => {
        return restaurants.filter((restaurant) => this.passesFilters(restaurant, selectedFilters));
      })
    );
  }

  /**
   * Determines if a restaurant passes the filters.
   *
   * @param restaurant The restaurant to evaluate.
   * @param filters The selected filters.
   * @return `true` if the restaurant passes the filters, `false` otherwise.
   */
  private passesFilters(restaurant: Restaurant, filters: RestaurantFilter): boolean {
    return (
      this.passesNavigationFilters(restaurant, filters) && this.passesCustomFilters(restaurant, filters.filtersCustom)
    );
  }

  /**
   * Determines if a restaurant passes the navigation filters.
   *
   * @param {Restaurant} restaurant - The restaurant to evaluate.
   * @param {RestaurantFilter} filters - The selected filters.
   * @returns {boolean} `true` if the restaurant passes the navigation filters, `false` otherwise.
   */
  private passesNavigationFilters(restaurant: Restaurant, filters: RestaurantFilter): boolean {
    // Convert the search term to lowercase and trim it.
    const textSearch = filters.searchTerm.toLowerCase().trim();
    // Minimum length for text search.
    const MIN_LENGTH = 0;

    // Check if the restaurant passes the filters.
    const passDiscount = !filters.navigationFilters.includes(NavigationFilterType.Discount) || restaurant.hasDiscount();
    const passFreeDelivery = !filters.navigationFilters.includes(NavigationFilterType.FreeDelivery) || restaurant.hasFreeDelivered();
    const passTakeAway = !filters.navigationFilters.includes(NavigationFilterType.TakeAway) || restaurant.hasTakeAway();
    const passName = textSearch.length < MIN_LENGTH || restaurant.hasSimilarName(textSearch);

    // Return true if all filters pass, otherwise return false.
    return passDiscount && passFreeDelivery && passTakeAway && passName;
  }

  /**
   * Determines if a restaurant passes the custom filters.
   *
   * @param {Restaurant} restaurant - The restaurant to evaluate.
   * @param {RestaurantCustomFilter} customFilters - The selected custom filters.
   * @returns {boolean} `true` if the restaurant passes the custom filters, `false` otherwise.
   */
  private passesCustomFilters(restaurant: Restaurant, customFilters: RestaurantCustomFilter): boolean {
    // Check if custom filters are not activated, and if so, return true.
    if (!customFilters.isActivated) return true;

    // Check if the restaurant passes the filters.
    const passBenefitFilter = this.passesBenefitFilter(restaurant, customFilters.benefit);
    const passPaymentFilter = this.passesPaymentFilter(restaurant, customFilters.payment);
    const passOtherFilter = this.passesOtherFilter(restaurant, customFilters.others);

    // Return true if all custom filters pass, otherwise return false.
    return passBenefitFilter && passPaymentFilter && passOtherFilter;
  }


  /**
   * Determines if a restaurant passes the benefit filters.
   *
   * @param {Restaurant} restaurant - The restaurant to evaluate.
   * @param {RestaurantBenefitFilter} benefitFilter - The selected benefit filters.
   * @returns {boolean} `true` if the restaurant passes the benefit filters, `false` otherwise.
   */
  private passesBenefitFilter(restaurant: Restaurant, benefitFilter: RestaurantBenefitFilter): boolean {
    // Check if the restaurant passes the filters.
    const passDiscount = !benefitFilter.hasDiscount || restaurant.hasDiscount();
    const passFasterDelivery = !benefitFilter.fasterDelivery || restaurant.hasFastDelivery();
    const passFreeDelivery = !benefitFilter.freeDelivery || restaurant.hasFreeDelivered();

    // Return true if all benefit filters pass, otherwise return false.
    return passDiscount && passFasterDelivery && passFreeDelivery;
  }

  /**
   * Determines if a restaurant passes the payment filters.
   *
   * @param {Restaurant} restaurant - The restaurant to evaluate.
   * @param {RestaurantPaymentFilter} paymentFilter - The selected payment filters.
   * @returns {boolean} `true` if the restaurant passes the payment filters, `false` otherwise.
   */
  private passesPaymentFilter(restaurant: Restaurant, paymentFilter: RestaurantPaymentFilter): boolean {
    // Check if the restaurant passes the filters.
    const passCash = !paymentFilter.cash || restaurant.hasPaymentCash();
    const passCard = !paymentFilter.card || restaurant.hasPaymentCard();

    // Return true if both payment filters pass, otherwise return false.
    return passCash && passCard;
  }

  /**
   * Determines if a restaurant passes the other filters.
   *
   * @param {Restaurant} restaurant - The restaurant to evaluate.
   * @param {RestaurantOthersFilter} othersFilter - The selected other filters.
   * @returns {boolean} `true` if the restaurant passes the other filters, `false` otherwise.
   */
  private passesOtherFilter(restaurant: Restaurant, othersFilter: RestaurantOthersFilter): boolean {
    // Check if the restaurant passes the filters.
    const passNewRestaurants = !othersFilter.newRestaurants || restaurant.isNewRestaurant();
    const passTakeAway = !othersFilter.takeAway || restaurant.hasTakeAway();
    const passFavorite = !othersFilter.favorite || restaurant.isFavorite();
    const passLowerCostDelivery = !othersFilter.lowerCost || restaurant.hasLowerCost();

    // Return true if all other filters pass, otherwise return false.
    return passNewRestaurants && passTakeAway && passFavorite && passLowerCostDelivery;
  }

}
