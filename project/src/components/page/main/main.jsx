import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../../place-card/place-card';
import placeCardProp from '../../place-card/place-card.prop';
import Header from '../../ui/header/header';
import Location from '../../location/location';
import Sorting from '../../sorting/sorting';
import Map from '../../map/map';

function Main(props) {
  const {maxCountCards, places} = props;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Location />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>

              <Sorting />

              <div className="cities__places-list places__list tabs__content">
                {places.map((place) => <PlaceCard key={place.id} place={place}/>).slice(0, maxCountCards)}
              </div>
            </section>
            <div className="cities__right-section">

              <Map />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  maxCountCards: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
};

export default Main;
