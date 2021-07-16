import React from 'react';
import PropTypes from 'prop-types';
import { RatingSetting } from '../../../const';

const FULL_RATING = 100;
const COUNT_STARS = 5;

export const Setting = {
  CARD: {
    mainClass: 'place-card__rating',
    starsClass: 'place-card__stars',
  },
  PROPERTY: {
    mainClass: 'property__rating',
    starsClass: 'property__stars',
  },
  REVIEW: {
    mainClass: 'reviews__rating',
    starsClass: 'reviews__stars',
  },
};

const getRating = (rating) => rating * FULL_RATING / COUNT_STARS;

function Rating(props) {
  const {modifier = RatingSetting.CARD, rating} = props;

  return (
    <div className={`${Setting[modifier].mainClass} rating`}>
      <div className={`${Setting[modifier].starsClass} rating__stars`}>
        <span style={{
          width: `${getRating(rating)}%`,
        }}
        >
        </span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

Rating.propTypes = {
  modifier: PropTypes.oneOf([RatingSetting.CARD, RatingSetting.PROPERTY, RatingSetting.REVIEW]),
  rating: PropTypes.number.isRequired,
};

export default Rating;
