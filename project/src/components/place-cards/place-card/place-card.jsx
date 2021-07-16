import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import placeProp from './place.prop';
import settingProp from './setting.prop';
import Rating from '../../ui/rating/rating';
import { RatingSetting } from '../../../const';
import './place-card.css';

const TEMPLATE_PREMIUM = <div className="place-card__mark"><span>Premium</span></div>;
const FAVORITE_CLASS = 'place-card__bookmark-button--active';

function PlaceCard(props) {
  const {setting, place, ...restProps} = props;
  const {MAIN_CLASS: mainClass, IMAGE_WRAPPER_CLASS: imageWrapperClass, IMG_WIDTH: imgWidth, IMG_HEIGHT: imgHeight, INFO_CLASS: infoClass} = setting;
  const {previewImage, title, price, type, rating, isPremium, isFavorite, id} = place;

  return (
    <article
      className={`${mainClass} place-card`}
      {...restProps}
    >
      {isPremium ? TEMPLATE_PREMIUM : ''}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt={title} />
        </Link>
      </div>
      <div className={infoClass}>
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

        <Rating modifier={RatingSetting.CARD} rating={rating} />

        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  place: placeProp,
  setting: settingProp,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};

export default PlaceCard;
