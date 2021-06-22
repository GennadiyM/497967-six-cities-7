import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import placeCardProp from '../place-card/place-card.prop';

function App(props) {
  const {maxCountCards, places} = props;
  return (
    <MainScreen
      maxCountCards = {maxCountCards}
      places = {places}
    />
  );
}

App.propTypes = {
  maxCountCards: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
};

export default App;
