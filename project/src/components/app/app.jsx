import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoute } from '../../const';
import MainPage from '../page/main/main';
import SignPage from '../page/sign-in/sign-in';
import RoomPage from '../page/room/room';
import NotFoundPage from '../page/not-found/not-found';
import FavoritesPage from '../page/favorites/favorites';
import placeProp from '../place-cards/place-card/place.prop';

function App(props) {
  const { maxCountCards, places, cityNames } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage
            maxCountCards={maxCountCards}
            places={places}
            cityNames={cityNames}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            places={places}
          />
        </Route>
        <Route exact path={AppRoute.OFFER} component={RoomPage} />
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
    placeProp,
  ).isRequired,
  cityNames: PropTypes.arrayOf(PropTypes.string),
};

export default App;
