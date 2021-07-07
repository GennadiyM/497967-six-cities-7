
import React from 'react';
import PropTypes from 'prop-types';
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
  const {places, cityNames} = props;

  const favoritePlaces = places.filter((place) => place.isFavorite);

  const favoritePlacesOnSity = cityNames.map((city) => getFavoritePlacesOnSity(favoritePlaces, city)).filter((city) => city.places.length !== 0);

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
  cityNames: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Favorites;
