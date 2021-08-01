import React from 'react';
import Rating from '../ui/rating/rating';
import reviewItemProp from './review-item.prop';
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
            day: 'numeric',
          })}
        >
          {dateComment.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  review: reviewItemProp,
};

export default ReviewItem;
