
export const AppRoute = {
  LOGIN: '/login',
  ROOT: '/',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id?',
};

export const CardSetting = {
  PLACE_CARD: 'PLACE_CARD',
  FAVORITES_CARD: 'FAVORITES_CARD',
  NEAR_PLACE_CARD: 'NEAR_PLACE_CARD',
};

export const SortType = {
  Popular: {
    VALUE: 'Popular',
    NAME: 'Popular',
  },
  PriceUp: {
    VALUE: 'PriceUp',
    NAME: 'Price: low to high',
  },
  PriceDown: {
    VALUE: 'PriceDown',
    NAME: 'Price: high to low',
  },
  Rating: {
    VALUE: 'Rating',
    NAME: 'Top rated first',
  },
};

export const SITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
