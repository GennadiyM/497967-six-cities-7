import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SortType } from '../../const';
import placeCardProp from '../place-card/place-card.prop';
import PlaceCard from '../place-card/place-card';
import Sorting from '../sorting/sorting';

function PlacesList (props) {
  const { maxCountCards, places, city } = props;
  const [currentSortType, setCurrentSortType] = useState(SortType.Popular.VALUE);
  const getCountPlacesToString = (count) => `${count} place${count === 1 ? '' : 's' }`;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{getCountPlacesToString(places.length)} to stay in {city}</b>

      <Sorting
        currentSortType={currentSortType}
        changeSortTypeHandler={(type) => setCurrentSortType(type)}
      />

      <div className="cities__places-list places__list tabs__content">
        {places.map((place) => <PlaceCard key={place.id} place={place}/>).slice(0, maxCountCards)}
      </div>
    </section>
  );
}

PlacesList.propTypes = {
  maxCountCards: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
  city: PropTypes.string,
};

export default PlacesList;
