import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { SITY_NAMES } from './const';
import { places } from './mock';

const Setting = {
  MAX_COUNT_CARDS: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      maxCountCards = {Setting.MAX_COUNT_CARDS}
      places = {places}
      cityNames = {SITY_NAMES}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
