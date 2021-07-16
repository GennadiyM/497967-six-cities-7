import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';
import placeProp from '../place-cards/place-card/place.prop';

function FavoritesList (props) {
  const {favoritePlacesOnSity} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {favoritePlacesOnSity.map((city) => <FavoritesItem key={city.name} city={city} />)}
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  favoritePlacesOnSity: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      places: PropTypes.arrayOf(
        placeProp,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default FavoritesList;
