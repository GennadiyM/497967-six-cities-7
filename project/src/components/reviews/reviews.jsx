import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';
import reviewItemProp from '../review-item/review-item.prop';

const MAX_COUNT = 10;

function Reviews (props) {
  const { reviews } = props;

  return (
    <ul className="reviews__list">
      {reviews.slice(0, MAX_COUNT).map((review) => <ReviewItem review={review} key={`${review.id}-${review.date}`} />)}
    </ul>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    reviewItemProp,
  ).isRequired,
};

export default Reviews;
