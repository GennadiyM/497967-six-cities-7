import React, { useState } from 'react';
import PropTypes from 'prop-types';
import placeProp from '../../place-cards/place-card/place.prop';
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
  const [activePlaceId, setActivePlaceId] = useState(null);

  const onListItemHover = (id) => {
    setActivePlaceId(id);
  };

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
                onListItemHover={onListItemHover}
                city={cityActive}
              />}

            <div className="cities__right-section">

              {placesOnCurrentCity.length !== 0 && <Map places={placesOnCurrentCity} activePlaceId={activePlaceId}/>}

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
    placeProp,
  ).isRequired,
  cityNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Main;
