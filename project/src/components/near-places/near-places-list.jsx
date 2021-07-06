import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';
import { CardSetting } from '../../const';

function NearPlacesList(props) {
  const {nearbyPlaces} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyPlaces.map((place) => <PlaceCard key={place.id} place={place} modifier={CardSetting.NEAR_PLACE_CARD} />)}
      </div>
    </section>
  );
}

NearPlacesList.propTypes = {
  nearbyPlaces: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
};

export default NearPlacesList;
