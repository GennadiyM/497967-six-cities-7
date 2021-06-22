import React from 'react';
import placeCardProp from './place-card.prop';
import './place-card.css';

const FULL_RATING = 100;
const COUNT_STARS = 5;
const TEMPLATE_PREMIUM = <div className="place-card__mark"><span>Premium</span></div>;
const FAVORITE_CLASS = 'place-card__bookmark-button--active';

const getRating = (rating) => rating * FULL_RATING / COUNT_STARS;
const getFirstSymbolUppercase = (str) => str[0].toUpperCase() + str.slice(1);

function PlaceCard(props) {
  const {previewImage, title, price, type, rating, isPremium, isFavorite} = props.place;

  return (
    <article className="cities__place-card place-card">
      {isPremium ? TEMPLATE_PREMIUM : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? FAVORITE_CLASS : ''}`} type="button">
            <svg className="place-card__bookmark-icon"  width="18" height="19">
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
        <p className="place-card__type">{getFirstSymbolUppercase(type)}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  place: placeCardProp,
};

export default PlaceCard;
