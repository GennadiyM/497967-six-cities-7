import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../ui/rating/rating';
import { RatingSetting } from '../../const';

function ReviewItem (props) {
  const { comment, date, rating, user } = props.review;
  const { avatarUrl, name} = user;

  const dateComment = new Date(date);

  return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt={`${name} avatar`} />
          </div>
          <span className="reviews__user-name">
            {name}
          </span>
        </div>
        <div className="reviews__info">

          <Rating modifier={RatingSetting.REVIEW} rating={rating} />

          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time"
                dateTime={dateComment.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric'
                })}>
            {dateComment.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}
          </time>
        </div>
      </li>
  );
}

ReviewItem.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatarUrl: PropTypes.string.required,
        id: PropTypes.number.required,
        isPro: PropTypes.bool.required,
        name: PropTypes.string.required,
      }).isRequired,
    }),
  ),
};

export default ReviewItem;
