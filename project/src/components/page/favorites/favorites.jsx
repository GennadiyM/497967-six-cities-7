
import React from 'react';
import PropTypes from 'prop-types';
import { SITY_NAMES } from '../../../const';
import Header from '../../ui/header/header';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Footer from '../../ui/footer/footer';
import placeCardProp from '../../place-card/place-card.prop';

const getFavoritePlacesOnSity = (favoritePlaces, city) => (
  {
    name: city,
    places: favoritePlaces.filter((place) => place.city.name === city),
  }
);

function Favorites (props) {
  const { places } = props;

  const favoritePlaces = places.filter((place) => place.isFavorite);

  const favoritePlacesOnSity = SITY_NAMES.map((city) => getFavoritePlacesOnSity(favoritePlaces, city)).filter((city) => city.places.length !== 0);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritePlacesOnSity.length !== 0 ? <FavoritesList favoritePlacesOnSity={favoritePlacesOnSity}/> : <FavoritesEmpty />}
        </div>
      </main>

      <Footer />

    </div>
  );
}

Favorites.propTypes = {
  places: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
};

export default Favorites;
