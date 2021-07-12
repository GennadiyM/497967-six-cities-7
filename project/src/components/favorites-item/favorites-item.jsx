import React from 'react';
import PropTypes from 'prop-types';
import PlaceCardFavorites from '../place-cards/place-card-favorites/place-card-favorites';
import placeProp from '../place-cards/place-card/place.prop';

function FavoritesItem (props) {
  const {city} = props;
  return (
    <li key={city.name} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {city.places.map((place) => <PlaceCardFavorites key={place.id} place={place}/>)}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    places: PropTypes.arrayOf(
      placeProp,
    ).isRequired,
  }).isRequired,
};

export default FavoritesItem;
