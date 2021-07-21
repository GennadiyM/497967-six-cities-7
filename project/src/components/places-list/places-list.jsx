import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SortType } from '../../const';
import placeProp from '../place-cards/place-card/place.prop';
import PlaceCardMain from '../place-cards/place-card-main/place-card-main';
import Sorting from '../sorting/sorting';

const getSortByPriceUp = (placeA, placeB) => placeB.price - placeA.price;
const getSortByPriceDown = (placeA, placeB) => placeA.price - placeB.price;
const getSortByRating = (placeA, placeB) => placeB.rating - placeA.rating;

function PlacesList (props) {
  const { maxCountCards, places, city, onListItemHover } = props;
  const [currentSortType, setCurrentSortType] = useState(SortType.Default.VALUE);

  const getCountPlacesToString = (count) => `${count} place${count === 1 ? '' : 's' }`;

  let sortPlaces = places.slice();

  switch(currentSortType) {
    case SortType.PriceUp.VALUE:
      sortPlaces.sort(getSortByPriceUp);
      break;

    case SortType.PriceDown.VALUE:
      sortPlaces.sort(getSortByPriceDown);
      break;

    case SortType.Rating.VALUE:
      sortPlaces.sort(getSortByRating);
      break;

    default:
      sortPlaces = places.slice();
      break;
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{getCountPlacesToString(places.length)} to stay in {city}</b>

      <Sorting
        currentSortType={currentSortType}
        changeSortTypeHandler={(type) => setCurrentSortType(type)}
      />

      <div className="cities__places-list places__list tabs__content">
        {sortPlaces.map((place) => (
          <PlaceCardMain
            key={place.id}
            place={place}
            changeActivePlaceHandler={onListItemHover}
          />)).slice(0, maxCountCards)}
      </div>
    </section>
  );
}

PlacesList.propTypes = {
  maxCountCards: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
    placeProp,
  ).isRequired,
  city: PropTypes.string,
  onListItemHover: PropTypes.func.isRequired,
};

export default PlacesList;
