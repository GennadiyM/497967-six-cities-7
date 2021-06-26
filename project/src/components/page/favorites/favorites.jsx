
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../ui/header/header';
import FavoritesList from '../../favorites-list/favorites-list';
import PlaceCard from '../../place-card/place-card';
import Footer from '../../ui/footer/footer';
import placeCardProp from '../../place-card/place-card.prop';

const Favorites = (props) => {
    const {places, cityNames} = props;

    const favoritePlaces = places.filter((place) => {
      return place.isFavorite;
    });

    const favoritePlacesOnSity = cityNames.map((city) => {
      return {
        name: city,
        places: favoritePlaces.filter((place) => {
          return place.city.name === city;
        }),
      }
    }).filter((city) => {
      return city.places.length !== 0;
    });

    return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritePlacesOnSity.length !== 0 ? <FavoritesList favoritePlaces={favoritePlacesOnSity}/> : 'sdfsdfsdfsdf'}
        </div>
      </main>

      <Footer />

    </div>
    );
};

Favorites.propTypes = {
  places: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
  cityNames: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
};

export default Favorites;
