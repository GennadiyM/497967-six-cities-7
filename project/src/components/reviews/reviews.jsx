import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-tem/review-item';

const MAX_COUNT = 10;

function Reviews (props) {
  const { reviews } = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem review={review} key={`${review.id}-${review.date}`} />)}
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
