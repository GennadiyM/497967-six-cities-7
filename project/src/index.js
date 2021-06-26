import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { SITY_NAMES } from './const';

const Setting = {
  MAX_COUNT_CARDS: 5,
};

const places = [
  {
    city: {
      name: 'Amsterdam',
    },
    id: '1',
    previewImage: 'img/apartment-01.jpg',
    title: 'Beautiful luxurious apartment at great location',
    price: 120,
    type: 'apartment',
    rating: 5,
    isPremium: true,
    isFavorite: true,
  },
  {
    city: {
      name: 'Amsterdam',
    },
    id: '2',
    previewImage: 'img/room.jpg',
    title: 'Wood and stone place',
    price: 80,
    type: 'private room',
    rating: 2.4,
    isPremium: false,
    isFavorite: true,
  },
  {
    city: {
      name: 'Cologne',
    },
    id: '3',
    title: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    type: 'apartment',
    rating: 4.0,
    isPremium: true,
    isFavorite: false,
  },
  {
    city: {
      name: 'Cologne',
    },
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    type: 'apartment',
    rating: 3,
    isPremium: false,
    isFavorite: false,
  },
    {city: {
      name: 'Cologne',
    },
    id: '5',
    previewImage: 'img/room.jpg',
    title: 'Wood and stone place',
    price: 80,
    type: 'private room',
    rating: 4,
    isPremium: false,
    isFavorite: true,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      maxCountCards = {Setting.MAX_COUNT_CARDS}
      places = {places}
      cityNames = {SITY_NAMES}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
