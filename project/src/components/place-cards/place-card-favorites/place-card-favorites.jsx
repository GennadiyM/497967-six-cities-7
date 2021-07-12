import React from 'react';
import placeProp from '../place-card/place.prop';
import PlaceCard from '../place-card/place-card';

const Setting = {
  MAIN_CLASS: 'favorites__card',
  IMAGE_WRAPPER_CLASS: 'favorites__image-wrapper',
  IMG_WIDTH: '150',
  IMG_HEIGHT: '110',
  INFO_CLASS: 'favorites__card-info place-card__info',
};

function PlaceCardFavorites(props) {
  const {place} = props;

  return (
    <PlaceCard
      setting={Setting}
      place={place}
    />
  );
}

PlaceCardFavorites.propTypes = {
  place: placeProp,
};

export default PlaceCardFavorites;
