import React from 'react';
import placeProp from '../place-card/place.prop';
import PlaceCard from '../place-card/place-card';

const Setting = {
  MAIN_CLASS: 'near-places__card',
  IMAGE_WRAPPER_CLASS: 'near-places__image-wrapper',
  IMG_WIDTH: '260',
  IMG_HEIGHT: '200',
  INFO_CLASS: 'place-card__info',
};

function PlaceCardNear(props) {
  const {place} = props;

  return (
    <PlaceCard
      setting={Setting}
      place={place}
    />
  );
}

PlaceCardNear.propTypes = {
  place: placeProp,
};

export default PlaceCardNear;
