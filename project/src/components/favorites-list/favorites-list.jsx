import React from 'react';
import PropTypes from 'prop-types';
import { CardSetting } from '../../const';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';

const FavoritesList = (props) => {
  const {favoritePlaces} = props;
    return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">

        {favoritePlaces.map((item) => {
          return (
            <li key={item.name} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{item.name}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {item.places.map((place) => <PlaceCard key={place.id} place={place} modifier={CardSetting.FAVORITES_CARD}/>)}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favoritePlaces: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      places: PropTypes.arrayOf(
        placeCardProp,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default FavoritesList;
