import React from 'react';
import PropTypes from 'prop-types';

function Reviews (props) {
  const { reviews } = props;

  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            Max
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
          </p>
          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
        </div>
      </li>
    </ul>
  );
}

Reviews.propTypes = {
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

export default Reviews;
