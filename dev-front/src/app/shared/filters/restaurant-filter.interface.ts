export interface RestaurantFilter {
  searchTerm: string;
  navigationFilters: string[];
  filtersCustom: RestaurantCustomFilter;
}

export interface RestaurantBenefitFilter {
  hasDiscount: boolean;
  freeDelivery: boolean;
  fasterDelivery: boolean;
}

export interface RestaurantPaymentFilter {
  card: boolean;
  cash: boolean;
}

export interface RestaurantOthersFilter {
  favorite: boolean;
  newRestaurants: boolean;
  lowerCost: boolean;
  takeAway: boolean;
}


export interface RestaurantCustomFilter {
  benefit: RestaurantBenefitFilter,
  payment: RestaurantPaymentFilter,
  others: RestaurantOthersFilter,
  isActivated: boolean;
}


//ESTADO INICIAL
export const INITIAL_FILTER_STATE: RestaurantFilter = {
  searchTerm: '',
  navigationFilters: <string[]>[],
  filtersCustom: {
    benefit: {
      hasDiscount: false,
      freeDelivery: false,
      fasterDelivery: false,
    },
    payment: {
      cash: false,
      card: false,
    },
    others: {
      favorite: false,
      newRestaurants: false,
      lowerCost: false,
      takeAway: false,
    },
    isActivated: false,
  },
}
