import React from 'react';
import PropTypes from 'prop-types';
import placeProp from '../place-card/place.prop';
import PlaceCard from '../place-card/place-card';

const Setting = {
  MAIN_CLASS: 'cities__place-card',
  IMAGE_WRAPPER_CLASS: 'cities__image-wrapper',
  IMG_WIDTH: '260',
  IMG_HEIGHT: '200',
  INFO_CLASS: 'place-card__info',
};

function PlaceCardMain(props) {
  const {place, changeActivePlaceHandler} = props;

  return (
    <PlaceCard
      setting={Setting}
      place={place}
      onMouseOver={() => changeActivePlaceHandler(place.id)}
      onMouseOut={() => changeActivePlaceHandler('')}
    />
  );
}

PlaceCardMain.propTypes = {
  place: placeProp,
  changeActivePlaceHandler: PropTypes.func.isRequired,
};

export default PlaceCardMain;
