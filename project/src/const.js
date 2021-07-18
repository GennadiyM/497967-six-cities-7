
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

export const RatingSetting = {
  CARD: 'CARD',
  PROPERTY: 'PROPERTY',
  REVIEW: 'REVIEW',
};

export const SortType = {
  Default: {
    VALUE: 'Default',
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

export const CustomPin = {
  DEFAULT: {
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  },
  ACTIVE: {
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  },
};

export const SITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
