import React from 'react';
import PropTypes from 'prop-types';
import placeCardProp from './place-card.prop';
import { CardSetting } from '../../const';
import './place-card.css';

const FULL_RATING = 100;
const COUNT_STARS = 5;
const TEMPLATE_PREMIUM = <div className="place-card__mark"><span>Premium</span></div>;
const FAVORITE_CLASS = 'place-card__bookmark-button--active';

export const Setting = {
  PLACE_CARD: {
    mainClass: 'cities__place-card',
    imageWrapperClass: 'cities__image-wrapper',
    imgWidth: '260',
    imgHeight: '200',
    infoClass: 'place-card__info',
  },
  FAVORITES_CARD: {
    mainClass: 'favorites__card',
    imageWrapperClass: 'favorites__image-wrapper',
    imgWidth: '150',
    imgHeight: '110',
    infoClass: 'favorites__card-info place-card__info',
  },
  NEAR_PLACE_CARD: {
    mainClass: 'near-places__card',
    imageWrapperClass: 'near-places__image-wrapper',
    imgWidth: '260',
    imgHeight: '200',
    infoClass: 'place-card__info',
  },
};


const getRating = (rating) => rating * FULL_RATING / COUNT_STARS;

function PlaceCard(props) {
  const {previewImage, title, price, type, rating, isPremium, isFavorite} = props.place;
  const {modifier = CardSetting.PLACE_CARD} = props;

  return (
    <article className={`${Setting[modifier].mainClass} place-card`}>
      {isPremium ? TEMPLATE_PREMIUM : ''}
      <div className={`${Setting[modifier].imageWrapperClass} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={Setting[modifier].imgWidth} height={Setting[modifier].imgHeight} alt={title} />
        </a>
      </div>
      <div className={Setting[modifier].infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? FAVORITE_CLASS : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${getRating(rating)}%`,
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  place: placeCardProp,
  modifier: PropTypes.oneOf(['PLACE_CARD', 'FAVORITES_CARD', 'NEAR_PLACE_CARD']),
};

export default PlaceCard;
