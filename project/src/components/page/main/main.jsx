import React , { useState } from 'react';
import PropTypes from 'prop-types';
import placeCardProp from '../../place-card/place-card.prop';
import Header from '../../ui/header/header';
import Location from '../../location/location';
import MainEmpty from '../../main-empty/main-empty';
import PlacesList from '../../places-list/places-list';
import Map from '../../map/map';

function Main(props) {
  const { maxCountCards, places, cityNames } = props;
  const [cityDefault] = cityNames;
  const [cityActive, setCityActive] = useState(cityDefault);
  const placesOnCurrentCity = places.filter((place) => place.city.name === cityActive);

  return (
    <div className={`page page--gray page--main ${placesOnCurrentCity.length === 0 && 'page__main--index-empty'}`}>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Location
          cityNames={cityNames}
          cityActive={cityActive}
          changeCityHandler={setCityActive}
        />

        <div className="cities">
          <div className={`cities__places-container container ${placesOnCurrentCity.length === 0 && 'cities__places-container--empty'}`}>

            {placesOnCurrentCity.length === 0 ?
              <MainEmpty /> :
              <PlacesList
                places={placesOnCurrentCity}
                maxCountCards={maxCountCards}
                city={cityActive}
              />}

            <div className="cities__right-section">

              {placesOnCurrentCity.length !== 0 && <Map />}

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
  cityNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;
