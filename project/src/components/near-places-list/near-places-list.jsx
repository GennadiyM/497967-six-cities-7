import React from 'react';
import PropTypes from 'prop-types';
import PlaceCardNear from '../place-cards/place-card-near/place-card-near';
import placeProp from '../place-cards/place-card/place.prop';


function NearPlacesList(props) {
  const {nearbyPlaces} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyPlaces.map((place) => <PlaceCardNear key={place.id} place={place} />)}
      </div>
    </section>
  );
}

NearPlacesList.propTypes = {
  nearbyPlaces: PropTypes.arrayOf(
    placeProp,
  ).isRequired,
};

export default NearPlacesList;
