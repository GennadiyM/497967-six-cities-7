import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../page/main/main';
import SignPage from '../page/sign-in/sign-in';
import NotFoundPage from '../page/not-found/not-found';
import FavoritesPage from '../page/favorites/favorites';
import placeCardProp from '../place-card/place-card.prop';

function App(props) {
  const {maxCountCards, places, cityNames} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            maxCountCards = {maxCountCards}
            places = {places}
          />
        </Route>
        <Route exact path="/login">
          <SignPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage
            places = {places}
            cityNames = {cityNames}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  maxCountCards: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
    placeCardProp,
  ).isRequired,
  cityNames: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
};

export default App;
