import React from 'react';
import PropTypes from 'prop-types';
import { CardSetting } from '../../const';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';

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
        {city.places.map((place) => <PlaceCard key={place.id} place={place} modifier={CardSetting.FAVORITES_CARD}/>)}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    places: PropTypes.arrayOf(
      placeCardProp,
    ).isRequired,
  }).isRequired,
};

export default FavoritesItem;
